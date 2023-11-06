
import { Inject, NotFoundException } from '@nestjs/common';
import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { ProvinceEntity } from '../../domain/entities/province.entity';
import { READ_PROVINCE_KEY } from '../../data-typeorm/services/inject.keys';
import { IReadProvinceRepository } from '../../domain/repositories/province.repository';
import { GetOneProvinceQuery } from '../queries/get-one.queries';

@QueryHandler(GetOneProvinceQuery)
export class GetOneProvinceHandler
  implements IQueryHandler<GetOneProvinceQuery, ProvinceEntity>
{

  constructor(
    @Inject(READ_PROVINCE_KEY)
    private readonly _repository: IReadProvinceRepository,
  ) {}

  async execute(
    query: GetOneProvinceQuery
  ): Promise<ProvinceEntity> {
    const result = await this._repository.getOne(query.id);
    if(!result)throw new NotFoundException();
    return result;
  }
}
