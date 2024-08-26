import { Controller, Get } from '@nestjs/common';
import { AuthService } from './auth.service';
import { Ctx, MessagePattern, RmqContext } from '@nestjs/microservices';

@Controller()
export class AuthController {
  constructor(private authService: AuthService) {}

  @MessagePattern({cmd:'get-users'})
  async getUsers(@Ctx() context:RmqContext){
    const channel = context.getChannelRef()
    const message = context.getMessage()
    channel.ack(message)

    return this.authService.getUsers()
  }

  @MessagePattern({cmd:'post-user'})
  async postUser(@Ctx() context:RmqContext){
    const channel = context.getChannelRef();
    const message = context.getMessage();
    channel.ack(message);

    return this.authService.postUser()
  }
}
