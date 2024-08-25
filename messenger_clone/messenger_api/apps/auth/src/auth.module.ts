import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: './.env',
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: 'localhost',
        port: 5432,
        username: 'postgres',
        database: 'messenger-clone',
        entities: [],
        synchronize: true, // not good for production mode
        autoLoadEntities: true,
      }),
      inject:[ConfigService]
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
