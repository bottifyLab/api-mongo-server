import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'
import { UpdateCustomerDto } from './dto/update-customer.dto'
import { CreateCustomerDto } from './dto/create-customer.dto'
import { Customer, CustomerDocument } from './schemas/customer.schema';

@Injectable()
export class CustomersService {

    constructor(@InjectModel(Customer.name) private customerModel: Model<CustomerDocument>) {
    }

    private customers = []

    async getAll(): Promise<Customer[]> {
        return this.customerModel.find().exec()
    }

    async getById(id: string): Promise<Customer>{
        return this.customerModel.findById(id)
    }

    async create(customerDto: CreateCustomerDto): Promise<Customer> {
        const newCustomer = new this.customerModel(customerDto)
        return newCustomer.save()
    }

    async remove(id: string): Promise<Customer> {
        return this.customerModel.findByIdAndRemove(id)
    }

    async update(id: string, customerDto: UpdateCustomerDto): Promise<Customer> {
        return this.customerModel.findByIdAndUpdate(id, customerDto, {new: true})
    }

}
