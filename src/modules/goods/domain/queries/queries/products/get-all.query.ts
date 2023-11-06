import { QueryProductDto } from "src/modules/goods/dtos/product.dto";

export class GetAllProductQuery {
  constructor(public readonly input: QueryProductDto) {}
}
