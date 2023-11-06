import { DataSource } from 'typeorm';
import { Seeder } from 'typeorm-extension';
import { CategoryModel } from '../models/category.model';
import { CategoryDatas } from './categories/category.data-seed';

export default class categroySeeder implements Seeder {
  public async run(dataSource: DataSource): Promise<any> {
    const categoryTRepository = dataSource.getRepository(CategoryModel);

    await categoryTRepository.save(
      CategoryDatas.map((item) => {
        const CRModel = new CategoryModel();
        CRModel.id = item.id;
        CRModel.category_code = item.category_code;
        CRModel.name = item.name;
        return CRModel;
      }),
    );
  }
}
