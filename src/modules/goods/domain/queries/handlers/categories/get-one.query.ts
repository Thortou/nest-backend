import { Inject, NotFoundException } from '@nestjs/common';
import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { READ_CATEGORY_REPOSITORY } from 'src/modules/goods/data-typeorm/services/inject.keys';
import { GetOneCategoryQuery } from '../../queries/categories/get-one.query';
import { CategoryEntity } from '../../../entities/category.entity';
import { IReadCategoryRepository } from '../../../repositories/category.repository';

@QueryHandler(GetOneCategoryQuery)
export class GetOneCategoryHandler
  implements IQueryHandler<GetOneCategoryQuery, CategoryEntity>
{
  constructor(
    @Inject(READ_CATEGORY_REPOSITORY)
    private readonly _repository: IReadCategoryRepository,
  ) {}

  async execute(query: GetOneCategoryQuery): Promise<CategoryEntity> {
    const result = await this._repository.getOne(query.id);

    if (!result) throw new NotFoundException();

    return result;
  }
}
