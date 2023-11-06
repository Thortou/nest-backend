import { Provider } from "@nestjs/common";
import { readProductTypeOrmRepositoryProvider } from "./products/read.service";
import { readCategoryTypeOrmRepositoryProvider } from "./categories/read.service";

export const goodsDataServices: Provider[] =[
    readCategoryTypeOrmRepositoryProvider,
    readProductTypeOrmRepositoryProvider,
]