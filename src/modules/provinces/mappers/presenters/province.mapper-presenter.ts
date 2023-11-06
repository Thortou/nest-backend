import { IMapperPresenter } from "src/interface/mapper.interface";
import { ProvinceEntity } from "../../domain/entities/province.entity";
import { ProvincePresenter } from "../../presenters/province.presenter";

export class ProvinceMapperPresenter implements IMapperPresenter<ProvinceEntity, ProvincePresenter>{
    toPresenter(entity: ProvinceEntity): ProvincePresenter {
        const presenter = new ProvincePresenter()
        presenter.id = entity.id;
        presenter.name = entity.name;
        presenter.prov_name_eng = entity.prov_name_eng;
        presenter.create_at = entity.create_at;
        presenter.update_at = entity.update_at;
        return presenter;
    }
}