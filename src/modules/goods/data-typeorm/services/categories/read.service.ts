
import { Injectable, Provider } from '@nestjs/common';
import { InjectDataSource } from '@nestjs/typeorm';
import { DatabaseConnection } from 'src/configurations/typeorm.config';
import { IPaginated, IPagination } from 'src/interface/paginate.interface';
import { CategoryMapper } from 'src/modules/goods/mappers/entities/category.mapper';
import { DataSource } from 'typeorm';
import { READ_CATEGORY_REPOSITORY, READ_PRODUCT_REPOSITORY } from '../inject.keys';
import { CategoryModel } from '../../models/category.model';
import { CategoryEntity } from 'src/modules/goods/domain/entities/category.entity';
import { IReadCategoryRepository } from 'src/modules/goods/domain/repositories/category.repository';

@Injectable()
export class ReadCategoryTypeOrmRepository implements IReadCategoryRepository {
  private _mapper: CategoryMapper = new CategoryMapper();

  constructor(
    @InjectDataSource(DatabaseConnection.Main)
    private _dataSource: DataSource,
  ) {}

  async getAll({
    page,
    limit,
    offset,
    orderBy: { column, sortOrder },
    filter: { name, category_code },
  }: IPagination<CategoryEntity>): Promise<IPaginated<CategoryEntity>> {
    const result = this._dataSource
      .getRepository(CategoryModel)
      .createQueryBuilder('category')

    if (name)
      result.andWhere('Categorys.name LIKE :name', {
        name: `%${name}%`,
      });

    if (category_code)
      result.andWhere('category.category_code = :category_code', {
        category_code,
      });

    if (limit) result.limit(limit);
    if (offset) result.offset(offset);
    if (page) result.offset((page - 1) * limit);
    if (column && sortOrder) result.orderBy(`categorys.${column}`, sortOrder);

    const resListData = await result.getManyAndCount();

    const listData = resListData[0].map((data) => this._mapper.toEntity(data));
    

    return { data: listData, total: resListData[1], limit, offset, page };
  }

  async getOne(id: number): Promise<CategoryEntity> {
    const res = await this._dataSource
      .getRepository(CategoryModel)
      .createQueryBuilder('category')
      .where('Categorys.id = :id', { id })
      .getOne();

    return res ? this._mapper.toEntity(res) : null;
  }
}

export const readCategoryTypeOrmRepositoryProvider: Provider = {
  provide: READ_CATEGORY_REPOSITORY,
  useClass: ReadCategoryTypeOrmRepository,
};
