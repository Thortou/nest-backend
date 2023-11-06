import { QueryProvinceDto } from "../../dtos/province.dto";

export class GetAllProvinceQuery {
    constructor(public readonly input: QueryProvinceDto){}
}