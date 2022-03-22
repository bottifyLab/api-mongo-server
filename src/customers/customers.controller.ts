import { Controller, Get, Param, Post, Delete, Put, Body, HttpCode, HttpStatus} from '@nestjs/common';
import { CreateCustomerDto } from './dto/create-customer.dto'
import { UpdateCustomerDto } from './dto/update-customer.dto'
import { CustomersService } from './customers.service';
import { Customer } from './schemas/customer.schema';

@Controller('customers')
export class CustomersController {
    
    constructor(private readonly customersService: CustomersService) {}
    
    @Get()
    getAll() {
        return this.customersService.getAll()
    }

    @Get(':id')
    getOne(@Param('id') id: string): Promise<Customer> {
        return this.customersService.getById(id)
    }

    @Post()
    @HttpCode(HttpStatus.CREATED)
    create(@Body() createCustomerDto: CreateCustomerDto): Promise<Customer>{
        return this.customersService.create(createCustomerDto)
    }

    @Delete(':id')
    remove(@Param('id') id: string): Promise<Customer> {
        return this.customersService.remove(id)
    }

    @Put(':id') 
    update(@Body() updateCustomerDto: UpdateCustomerDto, @Param('id') id: string): Promise<Customer> {
        return this.customersService.update(id, updateCustomerDto)
    }

}
