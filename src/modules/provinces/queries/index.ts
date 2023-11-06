import { Provider } from "@nestjs/common";
import { GetAllProvinceHandler } from "./handlers/get-all.query";
import { GetOneProvinceHandler } from "./handlers/get-one.query";

export const provinceQueries: Provider[] = [
    GetOneProvinceHandler,
    GetAllProvinceHandler,
  ];