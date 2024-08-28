import { NestFactory } from '@nestjs/core';
import { PresenceModule } from './presence.module';

async function bootstrap() {
  const app = await NestFactory.create(PresenceModule);
  await app.listen(3000);
}
bootstrap();
