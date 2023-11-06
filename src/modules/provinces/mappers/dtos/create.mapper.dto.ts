import { IMapperDto } from "src/interface/mapper.interface";
import { ProvinceEntity } from "../../domain/entities/province.entity";
import { CreateProvinceDto } from "../../dtos/province.dto";

export class CreateProvinceDtoMapper implements IMapperDto<ProvinceEntity, CreateProvinceDto> {
    toEntity(dto: CreateProvinceDto): ProvinceEntity {
        const entity = new ProvinceEntity()
        entity.name = dto.name;
        entity.prov_name_eng = dto.prov_name_eng;
        return entity
    }
}