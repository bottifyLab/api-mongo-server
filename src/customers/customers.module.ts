import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CustomersService } from './customers.service';
import { CustomersController } from './customers.controller';
import { Customer, CustomerSchema } from './schemas/customer.schema';


@Module({
    providers: [CustomersService],
    controllers: [CustomersController],
    imports: [
        MongooseModule.forFeature([
            {name: Customer.name, schema: CustomerSchema}
        ])
    ]
})
export class CustomersModule {
}
