import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'
import { UpdateOfferDto } from './dto/update-offer.dto'
import { CreateOfferDto } from './dto/create-offer.dto'
import { Offer, OfferDocument } from './schemas/offer.schema';

@Injectable()
export class OffersService {

    constructor(@InjectModel(Offer.name) private offerModel: Model<OfferDocument>) {
    }

    private offers = []

    async getAll(): Promise<Offer[]> {
        return this.offerModel.find().exec()
    }

    async getById(id: string): Promise<Offer>{
        return this.offerModel.findById(id)
    }

    async create(offerDto: CreateOfferDto): Promise<Offer> {
        const newOffer = new this.offerModel(offerDto)
        return newOffer.save()
    }

    async remove(id: string): Promise<Offer> {
        return this.offerModel.findByIdAndRemove(id)
    }

    async update(id: string, offerDto: UpdateOfferDto): Promise<Offer> {
        return this.offerModel.findByIdAndUpdate(id, offerDto, {new: true})
    }

}
