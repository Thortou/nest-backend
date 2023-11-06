import { ApiProperty } from '@nestjs/swagger';

export class PPaginatedResponse<Entity> {
  @ApiProperty()
  limit?: number;

  @ApiProperty()
  page?: number;

  @ApiProperty()
  offset?: number;

  @ApiProperty()
  total: number;

  data: Entity[];
}
