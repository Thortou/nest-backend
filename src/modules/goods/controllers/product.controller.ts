
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { ProductMapperPresenter } from '../mappers/presenters/product.presenter.mapper';
import { CategoryMapperPresenter } from '../mappers/presenters/category.presenter.mapper';
import { QueryProductDto } from '../dtos/product.dto';
import { IPaginated } from 'src/interface/paginate.interface';
import { ProductPresenter } from '../presenters/product.presenter';
import { GetAllProductQuery } from '../domain/queries/queries/products/get-all.query';
import { ProductEntity } from '../domain/entities/product.entity';
@Controller('admin/product')
export class ProductController {
  private readonly _mapper = new ProductMapperPresenter(
    new CategoryMapperPresenter()
    );

  constructor(
    private readonly _commandBus: CommandBus,
    private readonly _queryBus: QueryBus,
  ) { }

  // @Permissions(Permission.CreateLocation)
  // @ApiCommandResponse({ model: LocationPresenter })
  // @Post()
  // @ApiConsumes('multipart/form-data', 'application/json')
  // @ApiBody({ type: CreateLocationDto })
  // async create(
  //   @Body() body: CreateLocationDto,
  // ): Promise<PCommandResponse<LocationPresenter>> {
  //   const { data, message } = await this._commandBus.execute<
  //     CreateLocationCommand,
  //     PCommandResponse<LocationEntity>
  //   >(new CreateLocationCommand(body));

  //   return { message, data: this._mapper.toPresenter(data) };
  // }

//   @Permissions(Permission.UpdateLocation)
//   @ApiCommandResponse({ model: LocationPresenter })
//   @Put(':id/update')
//   async update(
//     @Param('id', ParseIntPipe) id: number,
//     @Body() body: UpdateLocationDto,
//   ): Promise<PCommandResponse<LocationPresenter>> {
//     const { message, data } = await this._commandBus.execute<
//       UpdateLocationCommand,
//       PCommandResponse<LocationEntity>
//     >(new UpdateLocationCommand(id, body));

//     return { message, data: this._mapper.toPresenter(data) };
//   }

  @Get()
  async getAll(
    @Query() query: QueryProductDto,
  ): Promise<IPaginated<ProductPresenter>> {
    const result = await this._queryBus.execute<
      GetAllProductQuery,
      IPaginated<ProductEntity>
    >(new GetAllProductQuery(query));


    return {
      ...result,
      data: result.data.map((data) => this._mapper.toPresenter(data)),
    };
  }

//   @Permissions(Permission.ReadLocation)
//   @ApiOkResponse({ type: LocationPresenter })
//   @Get(':id')
//   async getOne(
//     @Param('id', ParseIntPipe) id: number,
//   ): Promise<LocationPresenter> {
//     const result = await this._queryBus.execute<
//       GetOneLocationQuery,
//       LocationEntity
//     >(new GetOneLocationQuery(id));

//     return this._mapper.toPresenter(result);
//   }

//   @Permissions(Permission.DeleteLocation)
//   @ApiCommandResponse({ model: LocationPresenter })
//   @Delete(':id')
//   async delete(
//     @Param('id', ParseIntPipe) id: number,
//   ): Promise<PCommandResponse<LocationPresenter>> {
//     const { data, message } = await this._commandBus.execute<
//       DeleteLocationCommand,
//       PCommandResponse<LocationEntity>
//     >(new DeleteLocationCommand(id));

//     return {
//       message,
//       data: this._mapper.toPresenter(data),
//     };
//   }
}
