import { ApolloFederationDriver, ApolloFederationDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloFederationDriverConfig>({
      driver:ApolloFederationDriver,
      autoSchemaFile:{
        federation:2
      }
    })
  ],
  controllers: [UsersController],
  providers: [UsersService,ConfigService],
})
export class UsersModule {}
