import { IMapperDto } from "src/interface/mapper.interface";
import { IPagination } from "src/interface/paginate.interface";
import { CategoryEntity } from "src/modules/goods/domain/entities/category.entity";
import { ProductEntity } from "src/modules/goods/domain/entities/product.entity";
import { QueryCategoryDto } from "src/modules/goods/dtos/category.dto";
import { QueryProductDto } from "src/modules/goods/dtos/product.dto";

export class GetAllCategoryMapperDto
  implements IMapperDto<IPagination<CategoryEntity>, QueryCategoryDto>
{
  toEntity(dto: QueryCategoryDto): IPagination<CategoryEntity> {
    return {
      page: dto.page,
      offset: dto.offset,
      limit: dto.limit,
      filter: {
        name: dto.name,
        category_code: dto.category_code,
      },
      orderBy: { column: dto.column, sortOrder: dto.sort_order },
    };
  }
}
