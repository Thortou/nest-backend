import { IMapper } from "src/interface/mapper.interface";
import { CategoryEntity } from "../../domain/entities/category.entity";
import { CategoryModel } from "../../data-typeorm/models/category.model";

export class CategoryMapper implements IMapper<CategoryEntity, CategoryModel> {
    toEntity(model: CategoryModel): CategoryEntity {
        const entity = new CategoryEntity()
        entity.id = model.id;
        entity.category_code = model.category_code;
        entity.name = model.name;
        entity.create_at = model.create_at;
        entity.update_at = model.update_at;

        return entity;
    }

    toModel(entity: CategoryEntity): CategoryModel {
        const model = new CategoryModel()
        model.id = entity.id;
        model.category_code = entity.category_code;
        model.name = entity.name;
        model.create_at = entity.create_at;
        model.update_at = entity.update_at;

        return model
    }
}