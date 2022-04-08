import { Controller, Get, Param, Post, Delete, Put, Body, HttpCode, HttpStatus} from '@nestjs/common';
import { CreateCustomerDto } from './dto/create-customer.dto'
import { UpdateCustomerDto } from './dto/update-customer.dto'
import { CustomersService } from './customers.service';
import { Customer } from './schemas/customer.schema';
import {
	ApiBearerAuth,
	ApiOperation,
	ApiResponse, ApiOkResponse,
	ApiTags
} from '@nestjs/swagger';

@ApiTags('customers')
@Controller('customers')
export class CustomersController {
    
    constructor(private readonly customersService: CustomersService) {}
    
    @Get()
    @ApiOkResponse({ description: 'Succes customers collection'})
    @ApiOperation({ summary: 'Получить список всех пользователей'})
    getAll() {
        return this.customersService.getAll()
    }

    @Get(':id')
    @ApiOperation({ summary: 'Получить пользователя по id'})
    getOne(@Param('id') id: string): Promise<Customer> {
        return this.customersService.getById(id)
    }

    @Post()
    @ApiOperation({ summary: 'Создать пользователя'})
    @HttpCode(HttpStatus.CREATED)
    create(@Body() createCustomerDto: CreateCustomerDto): Promise<Customer>{
        return this.customersService.create(createCustomerDto)
    }

    @Delete(':id')
    @ApiOperation({ summary: 'Удалить пользователя'})
    remove(@Param('id') id: string): Promise<Customer> {
        return this.customersService.remove(id)
    }

    @Put(':id') 
    @ApiOperation({ summary: 'Изменить пользователя'})
    update(@Body() updateCustomerDto: UpdateCustomerDto, @Param('id') id: string): Promise<Customer> {
        return this.customersService.update(id, updateCustomerDto)
    }

}
