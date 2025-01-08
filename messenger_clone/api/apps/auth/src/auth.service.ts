import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from './user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(UserEntity) private readonly userRepository: Repository<UserEntity>
  ){}

  async getUsers() {
    return this.userRepository.find()
  }

  async postUser() {
    return this.userRepository.save({name:"Charles"})
  }
}
