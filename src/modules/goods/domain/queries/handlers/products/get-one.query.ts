import { Inject, NotFoundException } from '@nestjs/common';
import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { GetOneProductQuery } from '../../queries/products/get-one.query';
import { ProductEntity } from '../../../entities/product.entity';
import { READ_PRODUCT_REPOSITORY } from 'src/modules/goods/data-typeorm/services/inject.keys';
import { IReadProductRepository } from '../../../repositories/product.repository';

@QueryHandler(GetOneProductQuery)
export class GetOneProductHandler
  implements IQueryHandler<GetOneProductQuery, ProductEntity>
{
  constructor(
    @Inject(READ_PRODUCT_REPOSITORY)
    private readonly _repository: IReadProductRepository,
  ) {}

  async execute(query: GetOneProductQuery): Promise<ProductEntity> {
    const result = await this._repository.getOne(query.id);

    if (!result) throw new NotFoundException();

    return result;
  }
}
