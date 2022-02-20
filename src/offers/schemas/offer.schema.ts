import { Prop, Schema, SchemaFactory} from '@nestjs/mongoose'
import { Document } from 'mongoose'

export type OfferDocument = Offer & Document

@Schema()
export class Offer {
    @Prop()
    title: string

    @Prop()
    cta: string

    @Prop()
    url: string
}

export const OfferSchema = SchemaFactory.createForClass(Offer)
