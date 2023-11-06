import { DataSource } from 'typeorm';
import { Seeder } from 'typeorm-extension';
import { ReceivedModel } from '../models/received.model';
import { ReceivedtDatas } from './categories/received.data-seed';

export default class receivedSeeder implements Seeder {
  public async run(dataSource: DataSource): Promise<any> {
    const receivedTRepository = dataSource.getRepository(ReceivedModel);

    await receivedTRepository.save(
      ReceivedtDatas.map((item) => {
        const RCModel = new ReceivedModel();
        RCModel.id = item.id;
        RCModel.product_id = item.product_id;
        RCModel.qty = item.qty;
        RCModel.price = item.price;
        RCModel.description = item.description;
        return RCModel;
      }),
    );
  }
}
