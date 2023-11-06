import { CreateProvinceDto } from "../../dtos/province.dto";

export class CreateProvinceCommand {
    constructor(public readonly input: CreateProvinceDto){}
}