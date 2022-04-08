import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();

  const config = new DocumentBuilder()
    .setTitle('BOT-PANEL API')
    .setDescription('API для телеграм ботов')
    .setVersion('1.0')
    .addTag('MAIN')
    .addBearerAuth()
    .build();
  
  const document = SwaggerModule.createDocument(app, config)
  SwaggerModule.setup('/docs', app, document);

  await app.listen(5000);
}
bootstrap();
