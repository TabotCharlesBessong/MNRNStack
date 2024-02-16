import { Inject, Injectable } from "@nestjs/common";
import { PassportSerializer } from "@nestjs/passport";
import { IUserService } from "src/users/user";
import { Services } from "src/utils/constants";
import { User } from "src/utils/typeorm";

@Injectable()
export class SessionSerializer extends PassportSerializer{
  constructor(
    @Inject(Services.AUTH)
    private readonly userService:IUserService
  ){
    super()
  }
  serializeUser(user: User, done: Function) {
    // const userDb = await this.userService. 
  }
}