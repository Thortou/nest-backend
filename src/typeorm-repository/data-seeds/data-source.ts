import { config } from "dotenv";
import { DataSource, DataSourceOptions } from 'typeorm';
import { SeederOptions, runSeeders } from 'typeorm-extension';
import { models } from "../model";
import { ProvinceSeeders } from "./../../modules/provinces/data-typeorm/seeds/index";
import { GoodsSeeders } from "../../modules/goods/data-typeorm/seeds";


config();

const options: DataSourceOptions & SeederOptions = {
  type: 'postgres',
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  entities: models,
  factories: [
    // ...userFactories,
  ],
  seeds: [
    // ...dataSeeders,    
    ...ProvinceSeeders,
    ...GoodsSeeders
  ],
}; 

const dataSource = new DataSource(options);
dataSource.initialize().then(async () => {
  await runSeeders(dataSource);
});
// export {dataSource}
