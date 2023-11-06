import { IMapperDto } from "src/interface/mapper.interface";
import { CategoryEntity } from "src/modules/goods/domain/entities/category.entity";
import { ProductEntity } from "src/modules/goods/domain/entities/product.entity";
import { CreateCategoryDto } from "src/modules/goods/dtos/category.dto";
import { CreateProductDto } from "src/modules/goods/dtos/product.dto";


export class CreateCategoryDtoMapper
  implements IMapperDto<CategoryEntity, CreateCategoryDto>
{
  toEntity(dto: CreateCategoryDto): CategoryEntity {
    const entity = new CategoryEntity();
    entity.category_code = dto.category_code;
    entity.name = dto.name;
    return entity;
  }
}
