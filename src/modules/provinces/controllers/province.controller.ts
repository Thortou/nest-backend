import { Body, Controller, Param, ParseIntPipe, Post, Get, Put, Query } from "@nestjs/common";
import { ProvinceMapperPresenter } from "../mappers/presenters/province.mapper-presenter";
import { CommandBus, QueryBus } from "@nestjs/cqrs";
import { CreateProvinceDto, QueryProvinceDto, UpdateProvinceDto } from "../dtos/province.dto";
import { PCommandResponse } from "src/presenters/command-repository";
import { ProvincePresenter } from "../presenters/province.presenter";
import { CreateProvinceCommand } from "../commands/commands/create.command";
import { ProvinceEntity } from "../domain/entities/province.entity";
import { UpdateProvinceCommand } from "../commands/commands/upate.command";
import { IPaginated } from "src/interface/paginate.interface";
import { GetAllProvinceQuery } from "../queries/queries/get-all.queries";
import { GetOneProvinceQuery } from "../queries/queries/get-one.queries";

@Controller('provinces')
export class ProvinceController {
  private readonly _mapper = new ProvinceMapperPresenter();

  constructor(
    private readonly _commandBus: CommandBus,
    private readonly _queryBus: QueryBus,
  ) {}

  @Post()
  async create(
    @Body() body: CreateProvinceDto,
  ): Promise<PCommandResponse<ProvincePresenter>> {
    const { data, message } = await this._commandBus.execute<
      CreateProvinceCommand,
      PCommandResponse<ProvinceEntity>
    >(new CreateProvinceCommand(body));

    return { message, data: this._mapper.toPresenter(data) };
  }

  @Put(':id/update')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() body: UpdateProvinceDto,
  ): Promise<PCommandResponse<ProvincePresenter>> {
    const { message, data } = await this._commandBus.execute<
      UpdateProvinceCommand,
      PCommandResponse<ProvinceEntity>
    >(new UpdateProvinceCommand(id, body));

    return { message, data: this._mapper.toPresenter(data) };
  }

  @Get()
  async getAll(
    @Query() query: QueryProvinceDto,
  ): Promise<IPaginated<ProvincePresenter>> {
    const result = await this._queryBus.execute<
      GetAllProvinceQuery,
      IPaginated<ProvinceEntity>
    >(new GetAllProvinceQuery(query));

    return {
      ...result,
      data: result.data.map((data) => this._mapper.toPresenter(data)),
    };
  }

  @Get(':id')
  async getOne(
    @Param('id', ParseIntPipe) id: number,
  ): Promise<ProvincePresenter> {
    const result = await this._queryBus.execute<
      GetOneProvinceQuery,
      ProvinceEntity
    >(new GetOneProvinceQuery(id));

    return this._mapper.toPresenter(result);
  }

//   @Permissions(Permission.DeleteProvince)
//   @ApiCommandResponse({ model: ProvincePresenter })
//   @Delete(':id')
//   async delete(
//     @Param('id', ParseIntPipe) id: number,
//   ): Promise<PCommandResponse<ProvincePresenter>> {
//     const { data, message } = await this._commandBus.execute<
//       DeleteProvinceCommand,
//       PCommandResponse<ProvinceEntity>
//     >(new DeleteProvinceCommand(id));

//     return {
//       message,
//       data: this._mapper.toPresenter(data),
//     };
//   }
}
