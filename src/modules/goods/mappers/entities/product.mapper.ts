import { IMapper } from "src/interface/mapper.interface";
import { ProductEntity } from "../../domain/entities/product.entity";
import { ProductModel } from "../../data-typeorm/models/product.model";
import { CategoryMapper } from "./category.mapper";
import { CategoryModel } from "../../data-typeorm/models/category.model";

export class ProductMapper implements IMapper<ProductEntity, ProductModel> {
    constructor(private readonly _categoryMapper?: CategoryMapper) { }
    toEntity(model: ProductModel): ProductEntity {
        const entity = new ProductEntity()
        entity.id = model.id;
        entity.product_code = model.product_code;
        entity.name = model.name;
        entity.qty = model.qty;
        entity.price = model.price;
        if (entity.category && this._categoryMapper) {
            entity.category = this._categoryMapper.toEntity(model.category)
        }
        entity.create_at = model.create_at;
        entity.update_at = model.update_at;

        return entity;
    }

    toModel(entity: ProductEntity): ProductModel {
        const model = new ProductModel()
        model.id = entity.id;
        model.product_code = entity.product_code;
        model.name = entity.name;
        model.qty = entity.qty;
        model.price = entity.price;
        if (entity.category) {
            const modelCategory = new CategoryModel()
            modelCategory.id = entity.category.id;
            model.category = modelCategory
        }
        model.create_at = entity.create_at;
        model.update_at = entity.update_at;

        return model;
    }
   

}