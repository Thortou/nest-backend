import { QueryCategoryDto } from "src/modules/goods/dtos/category.dto";

export class GetAllCategoryQuery {
  constructor(public readonly input: QueryCategoryDto) {}
}
