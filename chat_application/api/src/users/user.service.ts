import { IUserService } from './user';
import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectRepository } from '@nestjs/typeorm';
import { hashPassword } from 'src/utils/helpers';
import { User } from 'src/utils/typeorm';
import { CreateUserDetails } from "src/utils/types";
import { Repository } from 'typeorm';

@Injectable()
export class UserService implements IUserService {
  constructor(
    @InjectRepository(User) private readonly userRepository:Repository<User>
  ){}
  async createUser(userDetails:CreateUserDetails){
    const existingUser = await this.userRepository.findOneBy({
      email:userDetails.email
    })
    if(existingUser){
      throw new HttpException('User already exists',HttpStatus.CONFLICT)
    }
    const password = await hashPassword(userDetails.password)
    const newUser = this.userRepository.create({
      ...userDetails,password
    })
    return this.userRepository.save(newUser)
    console.log('Userservices')
  }
}