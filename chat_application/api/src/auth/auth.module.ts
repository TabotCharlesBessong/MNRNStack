import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { Services } from 'src/utils/types';
import { AuthService } from './auth.service';

@Module({
  controllers: [AuthController],
  providers: [
    {
      provide: Services.AUTH,
      useClass: AuthService,
    },
  ],
})
export class AuthModule {}
