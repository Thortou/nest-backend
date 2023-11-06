
import { Inject } from '@nestjs/common';
import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { GetAllProductQuery } from '../../queries/products/get-all.query';
import { IPaginated } from 'src/interface/paginate.interface';
import { ProductEntity } from '../../../entities/product.entity';
import { GetAllProductMapperDto } from 'src/modules/goods/mappers/dtos/products/read.mapper-dto';
import { READ_PRODUCT_REPOSITORY } from 'src/modules/goods/data-typeorm/services/inject.keys';
import { IReadProductRepository } from '../../../repositories/product.repository';

@QueryHandler(GetAllProductQuery)
export class GetAllProductHandler
  implements IQueryHandler<GetAllProductQuery, IPaginated<ProductEntity>>
{
  private _mapper = new GetAllProductMapperDto();

  constructor(
    @Inject(READ_PRODUCT_REPOSITORY)
    private readonly _repository: IReadProductRepository,
  ) {}

  async execute({
    input,
  }: GetAllProductQuery): Promise<IPaginated<ProductEntity>> {
    const paginate = this._mapper.toEntity(input);

    return await this._repository.getAll(paginate);
  }
}
