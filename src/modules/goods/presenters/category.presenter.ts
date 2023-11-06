import { ApiProperty } from '@nestjs/swagger';
export class CategoryPresenter {
  @ApiProperty()
  id: number;

  @ApiProperty()
  category_code: string;

  @ApiProperty()
  name: string;

  @ApiProperty()
  create_at: Date;

  @ApiProperty()
  update_at: Date;
}
