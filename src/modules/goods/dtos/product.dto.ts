import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";
import { PaginationDto } from "src/dtos/paginate.dto";
import { ProductEntity } from "../domain/entities/product.entity";

export class CreateProductDto {
    @IsNotEmpty({ message: ('validation.IS_NOT_EMPTY') })
    @IsNumber({},{ message: ('validation.IS_NUMBER') })
    category_id: number
    @ApiProperty({ required: false })
    @IsOptional()
    @IsString({ message: ('validation.IS_STRING') })
    product_code: string;
    @ApiProperty({ required: false })
    @IsOptional()
    @IsString({ message: ('validation.IS_STRING') })
    name: string;
    @IsNotEmpty({ message: ('validation.IS_NOT_EMPTY') })
    @IsNumber({},{ message: ('validation.IS_NUMBER') })
    qty: number;

    price: number;
}

export class QueryProductDto extends PaginationDto<ProductEntity> {
    // @IsNotEmpty({ message: ('validation.IS_NOT_EMPTY') })
    // @IsNumber({},{ message: ('validation.IS_NUMBER') })
    category_id: number
    @ApiProperty({ required: false })
    @IsOptional()
    @IsString({ message: ('validation.IS_STRING') })
    product_code: string;
    @ApiProperty({ required: false })
    @IsOptional()
    @IsString({ message: ('validation.IS_STRING') })
    name: string;
}