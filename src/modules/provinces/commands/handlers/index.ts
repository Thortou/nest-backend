import { Provider } from "@nestjs/common";
import { CreateProvinceUseCase } from "./create.use-case";

export const provinceCommandHandlers: Provider[]= [
    CreateProvinceUseCase
]