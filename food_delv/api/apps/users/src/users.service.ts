import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { LoginDto, RegisterDto } from './dto/user.dto';
import { PrismaService } from '../../../prisma/prisma.service';

@Injectable()
export class UsersService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly prisma: PrismaService,
    private readonly configService: ConfigService,
  ) {}
  
  // register service
  async register(registerDto:RegisterDto){
    const {email,password,name} = registerDto
    const user = {name,email,password}
    return user
  }

  // login service 
  async login(loginDto:LoginDto){
    const {email,password} = loginDto
    const user = {email,password}
    return user
  }

  // get all users service 
  async getUsers(){
    return this.prisma.user.findMany({})
  }
}
