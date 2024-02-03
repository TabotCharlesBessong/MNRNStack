import { IUserService } from './user';
import { Injectable } from "@nestjs/common";
import { CreateUserDetails } from "src/utils/types";

@Injectable()
export class UserService implements IUserService {
  createUser(userDetails:CreateUserDetails){
    console.log('Userservices')
  }
}