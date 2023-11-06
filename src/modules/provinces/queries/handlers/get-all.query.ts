
import { Inject } from '@nestjs/common';
import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { GetAllProvinceQuery } from '../queries/get-all.queries';
import { IPaginated } from 'src/interface/paginate.interface';
import { ProvinceEntity } from '../../domain/entities/province.entity';
import { GetAllProvinceMapperDto } from '../../mappers/dtos/read.mapper.dto';
import { READ_PROVINCE_KEY } from '../../data-typeorm/services/inject.keys';
import { IReadProvinceRepository } from '../../domain/repositories/province.repository';

@QueryHandler(GetAllProvinceQuery)
export class GetAllProvinceHandler
  implements IQueryHandler<GetAllProvinceQuery, IPaginated<ProvinceEntity>>
{
  private _mapper = new GetAllProvinceMapperDto();

  constructor(
    @Inject(READ_PROVINCE_KEY)
    private readonly _repository: IReadProvinceRepository,
  ) {}

  async execute(
    query: GetAllProvinceQuery,
  ): Promise<IPaginated<ProvinceEntity>> {
    const paginate = this._mapper.toEntity(query.input);

    return await this._repository.getAll(paginate);
  }
}
