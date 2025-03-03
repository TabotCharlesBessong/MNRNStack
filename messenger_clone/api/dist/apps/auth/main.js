"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("@nestjs/config");
const core_1 = require("@nestjs/core");
const microservices_1 = require("@nestjs/microservices");
const auth_module_1 = require("./auth.module");
async function bootstrap() {
    const app = await core_1.NestFactory.create(auth_module_1.AuthModule);
    const configService = app.get(config_1.ConfigService);
    const USER = configService.get('RABBITMQ_USER');
    const PASSWORD = configService.get('RABBITMQ_PASS');
    const HOST = configService.get('RABBITMQ_HOST');
    const QUEUE = configService.get('RABBITMQ_AUTH_QUEUE');
    app.connectMicroservice({
        transport: microservices_1.Transport.RMQ,
        options: {
            urls: [`amqp://${USER}:${PASSWORD}@${HOST}`],
            queue: QUEUE,
            noAck: false,
            queueOptions: { durable: true },
        },
    });
    app.startAllMicroservices();
}
bootstrap();
//# sourceMappingURL=main.js.map