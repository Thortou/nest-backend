
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
  import { CategoryMapperPresenter } from '../mappers/presenters/category.presenter.mapper';
  import { IPaginated } from 'src/interface/paginate.interface';
import { QueryCategoryDto } from '../dtos/category.dto';
import { CategoryPresenter } from '../presenters/category.presenter';
import { GetAllCategoryQuery } from '../domain/queries/queries/categories/get-all.query';
import { CategoryEntity } from '../domain/entities/category.entity';
  @Controller('admin/category')
  export class CategoryController {
    private readonly _mapper = new CategoryMapperPresenter( );
  
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
      @Query() query: QueryCategoryDto,
    ): Promise<IPaginated<CategoryPresenter>> {
      const result = await this._queryBus.execute<
        GetAllCategoryQuery,
        IPaginated<CategoryEntity>
      >(new GetAllCategoryQuery(query));
  
  
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
  