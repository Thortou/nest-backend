import { IMapperPresenter } from "src/interface/mapper.interface";
import { ProductPresenter } from "../../presenters/product.presenter";
import { ProductEntity } from "../../domain/entities/product.entity";
import { CategoryMapperPresenter } from "./category.presenter.mapper";

export class ProductMapperPresenter
    implements IMapperPresenter<ProductEntity, ProductPresenter>
{
    constructor(
        private readonly _categoryMapper?: CategoryMapperPresenter,
    ) { }

    toPresenter(entity: ProductEntity): ProductPresenter {
        const presenter = new ProductPresenter();
        presenter.id = entity.id;
        presenter.product_code = entity.product_code;
        presenter.name = entity.name;
        presenter.qty = entity.qty;
        presenter.price = entity.price;
        // if (entity.category) {
        //     presenter.cate_name = entity.category.name;
    
        //     // Add a guard for this._categoryMapper
        //     if (this._categoryMapper) {
                // presenter.category = this._categoryMapper.toPresenter(entity.category);
        //     }
        // }
        // presenter.cate_name = entity.category.name;
        if (entity.category && this._categoryMapper) {
            presenter.category = this._categoryMapper.toPresenter(entity.category);
        }
        presenter.create_at = entity.create_at;
        presenter.update_at = entity.update_at;
        console.log(entity.category.name);
        
        return presenter;
    }
}
