
import { Inject } from '@nestjs/common';
import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { IPaginated } from 'src/interface/paginate.interface';
import { READ_CATEGORY_REPOSITORY } from 'src/modules/goods/data-typeorm/services/inject.keys';
import { GetAllCategoryQuery } from '../../queries/categories/get-all.query';
import { CategoryEntity } from '../../../entities/category.entity';
import { IReadCategoryRepository } from '../../../repositories/category.repository';
import { GetAllCategoryMapperDto } from 'src/modules/goods/mappers/dtos/categories/read.mapper-dto';

@QueryHandler(GetAllCategoryQuery)
export class GetAllCategoryHandler
  implements IQueryHandler<GetAllCategoryQuery, IPaginated<CategoryEntity>>
{
  private _mapper = new GetAllCategoryMapperDto();

  constructor(
    @Inject(READ_CATEGORY_REPOSITORY)
    private readonly _repository: IReadCategoryRepository,
  ) {}

  async execute({
    input,
  }: GetAllCategoryQuery): Promise<IPaginated<CategoryEntity>> {
    const paginate = this._mapper.toEntity(input);

    return await this._repository.getAll(paginate);
  }
}
