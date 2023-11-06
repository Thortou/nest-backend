
import { Injectable, Provider } from '@nestjs/common';
import { InjectDataSource } from '@nestjs/typeorm';
import { DatabaseConnection } from 'src/configurations/typeorm.config';
import { IPaginated, IPagination } from 'src/interface/paginate.interface';
import { ProductEntity } from 'src/modules/goods/domain/entities/product.entity';
import { IReadProductRepository } from 'src/modules/goods/domain/repositories/product.repository';
import { CategoryMapper } from 'src/modules/goods/mappers/entities/category.mapper';
import { ProductMapper } from 'src/modules/goods/mappers/entities/product.mapper';
import { DataSource } from 'typeorm';
import { ProductModel } from '../../models/product.model';
import { READ_PRODUCT_REPOSITORY } from '../inject.keys';

@Injectable()
export class ReadProductTypeOrmRepository implements IReadProductRepository {
  private _mapper: ProductMapper = new ProductMapper(
    new CategoryMapper()
    );

  constructor(
    @InjectDataSource(DatabaseConnection.Main)
    private _dataSource: DataSource,
  ) {}

  async getAll({
    page,
    limit,
    offset,
    orderBy: { column, sortOrder },
    filter: { name, product_code },
  }: IPagination<ProductEntity>): Promise<IPaginated<ProductEntity>> {
    const result = this._dataSource
      .getRepository(ProductModel)
      .createQueryBuilder('products')
      .leftJoinAndSelect('products.category', 'category');

    if (name)
      result.andWhere('products.name LIKE :name', {
        name: `%${name}%`,
      });

    if (product_code)
      result.andWhere('products.product_code = :product_code', {
        product_code,
      });

    if (limit) result.limit(limit);
    if (offset) result.offset(offset);
    if (page) result.offset((page - 1) * limit);
    if (column && sortOrder) result.orderBy(`Products.${column}`, sortOrder);

    const resListData = await result.getManyAndCount();
    const myData = resListData[0]
    
    const listData = resListData[0].map((data) => this._mapper.toEntity(data));
    console.log(myData[0].category);
    

    return { data: listData, total: resListData[1], limit, offset, page };
  }

  async getOne(id: number): Promise<ProductEntity> {
    const res = await this._dataSource
      .getRepository(ProductModel)
      .createQueryBuilder('products')
      .leftJoinAndSelect('products.category', 'category')
      .where('products.id = :id', { id })
      .getOne();

    return res ? this._mapper.toEntity(res) : null;
  }
}

export const readProductTypeOrmRepositoryProvider: Provider = {
  provide: READ_PRODUCT_REPOSITORY,
  useClass: ReadProductTypeOrmRepository,
};
