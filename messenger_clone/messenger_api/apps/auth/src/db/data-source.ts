import { UserEntity } from "@app/shared/entities/user.entity";
import { DataSource, DataSourceOptions } from "typeorm";

export const dataSourceOptions: DataSourceOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  database: 'messenger-clone',
  entities: [UserEntity],
  migrations:['dist/apps/auth/db/migrations/*.js']
};

export const dataSource = new DataSource(dataSourceOptions)