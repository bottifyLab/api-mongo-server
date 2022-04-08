import { ApiProperty } from '@nestjs/swagger';
export class CreateCustomerDto {
    
    @ApiProperty({
       description: 'Id from telegram'
     }    
    )
    readonly telegram_id: string
    
    @ApiProperty()
    readonly name: string
}
