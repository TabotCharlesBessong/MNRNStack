import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const { PORT } = process.env;
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  app.setGlobalPrefix('api');
  try {
    await app.listen(PORT, () => {
      console.log(`Server is running on Port ${PORT}...`);
    });
  } catch (error) {
    console.log(error);
  }
}
bootstrap();
