import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { OffersModule } from './offers/offers.module';
import { CustomersModule } from './customers/customers.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
      CustomersModule,
      OffersModule, 
      MongooseModule.forRoot(`mongodb+srv://ben:ben@cluster0.zeumy.mongodb.net/maindb?retryWrites=true&w=majority`), AuthModule, UsersModule
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
