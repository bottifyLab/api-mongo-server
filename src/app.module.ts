import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OffersModule } from './offers/offers.module';

@Module({
  imports: [
      OffersModule, 
      MongooseModule.forRoot(`mongodb+srv://ben:ben@cluster0.zeumy.mongodb.net/maindb?retryWrites=true&w=majority`)
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
