import { CommandHandler, ICommandHandler } from "@nestjs/cqrs";
import { CreateProvinceCommand } from "../commands/create.command";
import { PCommandResponse } from "src/presenters/command-repository";
import { ProvinceEntity } from "../../domain/entities/province.entity";
import { CreateProvinceDtoMapper } from "../../mappers/dtos/create.mapper.dto";
import { Inject } from "@nestjs/common";
import { WRITE_PROVINCE_KEY } from "../../data-typeorm/services/inject.keys";
import { IWriteProvinceRepository } from "../../domain/repositories/province.repository";

@CommandHandler(CreateProvinceCommand)
export class CreateProvinceUseCase
  implements
    ICommandHandler<CreateProvinceCommand, PCommandResponse<ProvinceEntity>>
{
  private _mapper = new CreateProvinceDtoMapper();
  constructor(
    @Inject(WRITE_PROVINCE_KEY)
    private readonly _repository: IWriteProvinceRepository,
  ) {}

  async execute({
    input,
  }: CreateProvinceCommand): Promise<PCommandResponse<ProvinceEntity>> {
    const entity = this._mapper.toEntity(input);
    const result = await this._repository.create(entity);

    return { message: 'ເພີ່ມຂໍ້ມູນສຳເລັດ', data: result };
  }
}