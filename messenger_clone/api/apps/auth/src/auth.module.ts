import { ConfigModule, ConfigService } from '@nestjs/config';
import { Inject, Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { TypeOrmModule } from "@nestjs/typeorm"

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal:true,
      envFilePath: './.env',
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService:ConfigService) => ({
        type: 'postgres',
        url: configService.get('POSTGRES_URL'),
        autoLoadEntities:true,
        synchronize:true
      }),
      inject: [ConfigService]
    }) 
  ],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
