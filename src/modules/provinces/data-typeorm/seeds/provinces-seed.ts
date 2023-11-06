import { DataSource } from 'typeorm';
import { Seeder } from 'typeorm-extension';
import { ProvinceDatas } from './province-data/province-seed';
import { ProvinceModel } from '../models/province.model';

export default class provinceSeeder implements Seeder {
  public async run(dataSource: DataSource): Promise<any> {
    const lotteryTRepository = dataSource.getRepository(ProvinceModel);

    await lotteryTRepository.save(
      ProvinceDatas.map((item) => {
        const PVModel = new ProvinceModel();
        PVModel.id = item.id;
        PVModel.name = item.name;
        PVModel.prov_name_eng = item.prov_name_eng;
        return PVModel;
      }),
    );
  }
}
