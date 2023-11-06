import { Provider } from "@nestjs/common";
import { GetOneProductHandler } from "./handlers/products/get-one.query";
import { GetAllProductHandler } from "./handlers/products/get-all.query";
import { GetOneCategoryHandler } from "./handlers/categories/get-one.query";
import { GetAllCategoryHandler } from "./handlers/categories/get-all.query";

export const goodsQueries: Provider[] = [
    GetOneCategoryHandler,
    GetAllCategoryHandler,

    GetOneProductHandler,
    GetAllProductHandler,
]