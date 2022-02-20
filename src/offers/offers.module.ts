import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { OffersService } from './offers.service';
import { OffersController } from './offers.controller';
import { Offer, OfferSchema } from './schemas/offer.schema';


@Module({
    providers: [OffersService],
    controllers: [OffersController],
    imports: [
        MongooseModule.forFeature([
            {name: Offer.name, schema: OfferSchema}
        ])
    ]
})
export class OffersModule {
}
