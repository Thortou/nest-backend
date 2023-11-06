import { ApiProperty } from '@nestjs/swagger';
import { CategoryPresenter } from './category.presenter';
export class ProductPresenter {
  @ApiProperty()
  id: number;

  @ApiProperty()
  product_code: string;

  @ApiProperty()
  name: string;

  @ApiProperty()
  qty: number;

  @ApiProperty()
  price: number;

  @ApiProperty()
  category?: CategoryPresenter;

  @ApiProperty()
  cate_name: string;

  @ApiProperty()
  create_at: Date;

  @ApiProperty()
  update_at: Date;
}
