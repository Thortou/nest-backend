import { Provider } from "@nestjs/common";
import { writeProvinceTypeOrmRepositoryProvider } from "./write.province.service";
import { readProvinceTypeOrmRepositoryProvider } from "./read.province.service";

export const provinceDataServices: Provider[] = [
    writeProvinceTypeOrmRepositoryProvider,
    readProvinceTypeOrmRepositoryProvider,
]