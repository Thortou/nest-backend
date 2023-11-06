import { ApiProperty } from "@nestjs/swagger";
import { IsOptional, IsString } from "class-validator";
import { PaginationDto } from "src/dtos/paginate.dto";
import { CategoryEntity } from "../domain/entities/category.entity";

export class CreateCategoryDto {
    @ApiProperty({ required: false })
    @IsOptional()
    @IsString({ message: ('validation.IS_STRING') })
    category_code: string;
    @ApiProperty({ required: false })
    @IsOptional()
    @IsString({ message: ('validation.IS_STRING') })
    name: string;
}

export class QueryCategoryDto extends PaginationDto<CategoryEntity> {
    id: number
    @ApiProperty({ required: false })
    @IsOptional()
    @IsString({ message: ('validation.IS_STRING') })
    category_code: string;
    @ApiProperty({ required: false })
    @IsOptional()
    @IsString({ message: ('validation.IS_STRING') })
    name: string;
}