import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientProxyFactory, ClientsModule, Transport } from '@nestjs/microservices';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostgresConfigModule } from 'libs/config/config.module';
import { PostgresConfigService } from 'libs/config/config.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal:true,
      envFilePath:"./.env"
    }),
    ClientsModule.register([
    {
      name:"MESSENGER_CLONE",
      transport:Transport.RMQ,
      options:{
        urls:["amqp://localhost:5672"],
        queue:'messenger-clone',
        noAck:false,
        queueOptions:{
          durable:true
        }
      }
    },
    // TypeOrmModule.forRootAsync({
    //   imports:[PostgresConfigModule],
    //   useClass:PostgresConfigService,
    //   inject:[PostgresConfigService]
    // })
  ])],
  controllers: [AppController],
  providers: [AppService,{
    provide:'AUTH_SERVICE',
    useFactory:(configService:ConfigService) => {
      const USER = configService.get('RABBITMQ_USER')
      const PASSWORD = configService.get('RABBITMQ_PASS')
      const HOST = configService.get('RABBITMQ_HOST')
      const QUEUE = configService.get('RABBITMQ_QUEUE')

      return ClientProxyFactory.create({
        transport: Transport.RMQ,
        options: {
          urls: ['amqp://localhost:5672'],
          queue: QUEUE,
          queueOptions: {
            durable: true,
          },
        },
      });
    },
    inject:[ConfigService]
  }],
})
export class AppModule {}
