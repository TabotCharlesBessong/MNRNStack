import { NestFactory } from '@nestjs/core';
import { AuthModule } from './auth.module';
import { ConfigService } from '@nestjs/config';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.create(AuthModule);
  // await app.listen(3000);
  const configService = app.get(ConfigService)
  const USER = configService.get('RABBITMQ_USER')
  const PASS = configService.get('RABBITMQ_PASS')
  const HOST = configService.get('RABBITMQ_HOST')
  const QUEUE = configService.get('RABBITMQ_AUTH_QUEUE');

  app.connectMicroservice<MicroserviceOptions>({
    transport: Transport.RMQ,
    options: {
      urls: ['amqp://localhost:5672'],
      noAck:false,
      queue: QUEUE,
      queueOptions:{
        durable:true
      }
    },
  });

  app.startAllMicroservices()
}
bootstrap();
