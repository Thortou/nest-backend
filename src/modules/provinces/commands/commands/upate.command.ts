import { UpdateProvinceDto } from "../../dtos/province.dto";

export class UpdateProvinceCommand {
    constructor (
        public readonly id: number,
        public readonly input: UpdateProvinceDto, 
        ){}
}