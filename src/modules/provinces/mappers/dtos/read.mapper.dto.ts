import { IMapperDto } from "src/interface/mapper.interface";
import { IPagination } from "src/interface/paginate.interface";
import { ProvinceEntity } from "../../domain/entities/province.entity";
import { QueryProvinceDto } from "../../dtos/province.dto";


export class GetAllProvinceMapperDto
  implements IMapperDto<IPagination<ProvinceEntity>, QueryProvinceDto>
{
  toEntity(dto: QueryProvinceDto): IPagination<ProvinceEntity> {
    return {
      page: dto.page,
      offset: dto.offset,
      limit: dto.limit,
      filter: {
        name: dto.name,
        prov_name_eng: dto.prov_name_eng,
      },
      orderBy: { column: dto.column, sortOrder: dto.sort_order },
    };
  }
}
