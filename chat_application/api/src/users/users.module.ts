import { Module } from '@nestjs/common';
import { Services } from 'src/utils/constants';
import { UserService } from './user.service';
import {TypeOrmModule} from '@nestjs/typeorm'
import { User } from 'src/utils/typeorm';

@Module({
  imports:[TypeOrmModule.forFeature([User])],
  providers: [
    {
      provide: Services.USERS,
      useClass: UserService,
    },
  ],
  exports: [
    {
      provide: Services.USERS,
      useClass: UserService,
    },
  ],
})
export class UsersModule {}
