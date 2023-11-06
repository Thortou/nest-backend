import { ApiProperty } from "@nestjs/swagger";
import { OrderBy } from "./order-by.dto";
import { IsInt, IsOptional } from "class-validator";
import { Transform } from "@nestjs/class-transformer";

export class PaginationDto<Entity> extends OrderBy<Entity> {
    @ApiProperty({ required: false })
    @IsOptional()
    @IsInt({ message: ('validation.IS_INT') })
    @Transform(({ value }) => parseInt(value))
    limit?: number;
  
    @ApiProperty({ required: false })
    @IsOptional()
    @IsInt({ message: ('validation.IS_INT') })
    @Transform(({ value }) => parseInt(value))
    page?: number;
  
    @ApiProperty({ required: false })
    @IsOptional()
    @IsInt({ message: ('validation.IS_INT') })
    @Transform(({ value }) => parseInt(value))
    offset?: number;
  }