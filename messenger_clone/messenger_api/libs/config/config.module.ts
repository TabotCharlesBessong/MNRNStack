import { Module } from "@nestjs/common";
import { PostgresConfigService } from "./config.service";

@Module({
  providers:[PostgresConfigService]
})

export class PostgresConfigModule {}