import { DataSource } from 'typeorm';
import { Seeder } from 'typeorm-extension';
import { ProductDatas } from './categories/product.data-seed';
import { ProductModel } from '../models/product.model';

export default class productSeeder implements Seeder {
  public async run(dataSource: DataSource): Promise<any> {
    const prouctTRepository = dataSource.getRepository(ProductModel);

    await prouctTRepository.save(
      ProductDatas.map((item) => {
        const PDModel = new ProductModel();
        PDModel.id = item.id;
        PDModel.category_id = item.category_id;
        PDModel.product_code = item.product_code;
        PDModel.price = item.price;
        PDModel.qty = item.qty;
        PDModel.name = item.name;
        return PDModel;
      }),
    );
  }
}
