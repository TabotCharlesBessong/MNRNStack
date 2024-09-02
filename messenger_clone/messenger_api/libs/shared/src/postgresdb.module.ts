import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: './.env',
    }),

    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: 'localhost',
        port: 5432,
        username: 'postgres',
        database: 'messenger-clone',
        // entities: [UserEntity],
        migrations: ['dist/apps/auth/db/migrations/*.js'],
        synchronize:true
      }),

      inject: [ConfigService],
    }),
  ],
})
export class PostgresDBModule {}
