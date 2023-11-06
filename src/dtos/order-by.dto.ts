
import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsOptional, IsString } from 'class-validator';
import { SortOrder } from 'src/interface/order-by.interface';

export class OrderBy<Entity> {
  @ApiProperty({
    required: false,
    description: 'column to sort',
    type: 'string',
  })
  @IsOptional()
  @IsString({ message:('validation.IS_STRING') })
  column: keyof Entity;

  @ApiProperty({ required: false, enum: SortOrder, description: 'sort order' })
  @IsOptional()
  @IsEnum(SortOrder, {
    message: ('validation.IS_ENUM'),
  })
  sort_order: SortOrder;
}
