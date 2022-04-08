import { Controller, Get, Param, Post, Delete, Put, Body, HttpCode, HttpStatus} from '@nestjs/common';
import { CreateOfferDto } from './dto/create-offer.dto'
import { UpdateOfferDto } from './dto/update-offer.dto'
import { OffersService } from './offers.service';
import { Offer } from './schemas/offer.schema';
import {
        ApiBearerAuth,
        ApiOperation,
        ApiResponse,
        ApiTags
} from '@nestjs/swagger';

@ApiTags('offers')

@Controller('offers')
export class OffersController {
    
    constructor(private readonly offersService: OffersService) {}
    
    @Get()
    getAll() {
        return this.offersService.getAll()
    }

    @Get(':id')
    getOne(@Param('id') id: string): Promise<Offer> {
        return this.offersService.getById(id)
    }

    @Post()
    @HttpCode(HttpStatus.CREATED)
    create(@Body() createOfferDto: CreateOfferDto): Promise<Offer>{
        return this.offersService.create(createOfferDto)
    }

    @Delete(':id')
    remove(@Param('id') id: string): Promise<Offer> {
        return this.offersService.remove(id)
    }

    @Put(':id') 
    update(@Body() updateOfferDto: UpdateOfferDto, @Param('id') id: string): Promise<Offer> {
        return this.offersService.update(id, updateOfferDto)
    }

}
