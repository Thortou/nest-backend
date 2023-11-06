import { IMapperDto } from "src/interface/mapper.interface";
import { IPagination } from "src/interface/paginate.interface";
import { ProductEntity } from "src/modules/goods/domain/entities/product.entity";
import { QueryProductDto } from "src/modules/goods/dtos/product.dto";

export class GetAllProductMapperDto
  implements IMapperDto<IPagination<ProductEntity>, QueryProductDto>
{
  toEntity(dto: QueryProductDto): IPagination<ProductEntity> {
    return {
      page: dto.page,
      offset: dto.offset,
      limit: dto.limit,
      filter: {
        name: dto.name,
        product_code: dto.product_code,
      },
      orderBy: { column: dto.column, sortOrder: dto.sort_order },
    };
  }
}
