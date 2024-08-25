import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from "@nestjs/typeorm";

@Injectable()
export class PostgresConfigService implements TypeOrmOptionsFactory {
  constructor (private configService:ConfigService){}

  createTypeOrmOptions(): TypeOrmModuleOptions {
    return {
      type:"postgres",
      host:"localhost",
      port:5432,
      username:"postgres",
      database:"messenger-clone",
      entities:[],
      synchronize:true,
      autoLoadEntities:true
    }
  }
}