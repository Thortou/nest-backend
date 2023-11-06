import { goodsModels } from "../modules/goods/data-typeorm/models";
import { provinceModels } from "../modules/provinces/data-typeorm/models";

export const models = [...provinceModels, ...goodsModels];
