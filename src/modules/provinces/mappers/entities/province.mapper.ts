import { IMapper } from "src/interface/mapper.interface";
import { ProvinceEntity } from "../../domain/entities/province.entity";
import { ProvinceModel } from "../../data-typeorm/models/province.model";
export class ProvinceMapper implements IMapper<ProvinceEntity, ProvinceModel> {
    toEntity(model: ProvinceModel): ProvinceEntity {
      const entities = new ProvinceEntity();
      entities.id = model.id;
      entities.name = model.name;
      entities.prov_name_eng = model.prov_name_eng;
      entities.create_at = model.createAt;
      entities.update_at = model.updateAt;
      return entities;
    }
  
    toModel(entity: ProvinceEntity): ProvinceModel {
      const model = new ProvinceModel();
      model.id = entity.id;
      model.name = entity.name;
      model.prov_name_eng = entity.prov_name_eng;
      return model;
    }
  }