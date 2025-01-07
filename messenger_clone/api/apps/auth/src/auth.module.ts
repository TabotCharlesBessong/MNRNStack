import { ConfigModule } from '@nestjs/config';
import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal:true,
      envFilePath: './.env',
    })
  ],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
