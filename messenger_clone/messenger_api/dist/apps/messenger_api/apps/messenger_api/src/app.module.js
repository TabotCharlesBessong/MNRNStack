"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const microservices_1 = require("@nestjs/microservices");
const config_1 = require("@nestjs/config");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                isGlobal: true,
                envFilePath: "./.env"
            }),
            microservices_1.ClientsModule.register([
                {
                    name: "MESSENGER_CLONE",
                    transport: microservices_1.Transport.RMQ,
                    options: {
                        urls: ["amqp://localhost:5672"],
                        queue: 'messenger-clone',
                        noAck: false,
                        queueOptions: {
                            durable: true
                        }
                    }
                },
            ])
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService, {
                provide: 'AUTH_SERVICE',
                useFactory: (configService) => {
                    const USER = configService.get('RABBITMQ_USER');
                    const PASSWORD = configService.get('RABBITMQ_PASS');
                    const HOST = configService.get('RABBITMQ_HOST');
                    const QUEUE = configService.get('RABBITMQ_QUEUE');
                    return microservices_1.ClientProxyFactory.create({
                        transport: microservices_1.Transport.RMQ,
                        options: {
                            urls: ['amqp://localhost:5672'],
                            queue: QUEUE,
                            queueOptions: {
                                durable: true,
                            },
                        },
                    });
                },
                inject: [config_1.ConfigService]
            }],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map