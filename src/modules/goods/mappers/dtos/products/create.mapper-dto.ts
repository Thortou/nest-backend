import { IMapperDto } from "src/interface/mapper.interface";
import { CategoryEntity } from "src/modules/goods/domain/entities/category.entity";
import { ProductEntity } from "src/modules/goods/domain/entities/product.entity";
import { CreateProductDto } from "src/modules/goods/dtos/product.dto";


export class CreateProductDtoMapper
  implements IMapperDto<ProductEntity, CreateProductDto>
{
  toEntity(dto: CreateProductDto): ProductEntity {
    const entity = new ProductEntity();
    //category
    const categoryEntity = new CategoryEntity()
    categoryEntity.id = dto.category_id
    entity.category = categoryEntity;

    entity.product_code = dto.product_code;
    entity.name = dto.name;
    entity.qty = dto.qty;
    entity.price = dto.price;
    return entity;
  }
}
