import { IMapperPresenter } from "src/interface/mapper.interface";
import { CategoryEntity } from "../../domain/entities/category.entity";
import { CategoryPresenter } from "../../presenters/category.presenter";

export class CategoryMapperPresenter
    implements IMapperPresenter<CategoryEntity, CategoryPresenter>
{
    toPresenter(entity: CategoryEntity): CategoryPresenter {
        const presenter = new CategoryPresenter();
        presenter.id = entity.id;
        presenter.category_code = entity.category_code;
        presenter.name = entity.name;
        presenter.create_at = entity.create_at;
        presenter.update_at = entity.update_at;
        
        return presenter;
    }
}
