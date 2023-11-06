import { OmitType } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";
import { ProvinceEntity } from "../domain/entities/province.entity";
import { PaginationDto } from "src/dtos/paginate.dto";

export class CreateProvinceDto {
    @IsNotEmpty({message: 'ກະລຸນາປ້ອນຊື່ເປັນພາສາລາວກ່ອນ'})
    @IsString({message: 'ຊື່ຕ້ອງເປັນ string'})
    name: string;
    @IsString({message: 'ຊື່ຕ້ອງເປັນ string'})
    @IsNotEmpty({message: 'ກະລຸນາປ້ອນຊື່ເປັນອັງກິດ'})
    prov_name_eng: string;
}
export class UpdateProvinceDto extends OmitType(CreateProvinceDto, [
    'prov_name_eng',
  ]) {}
  

  export class QueryProvinceDto extends PaginationDto<ProvinceEntity> {
    id: number;
    @IsNotEmpty({message: 'ກະລຸນາປ້ອນຊື່ເປັນພາສາລາວກ່ອນ'})
    @IsString({message: 'ຊື່ຕ້ອງເປັນ string'})
    name: string;
    @IsString({message: 'ຊື່ຕ້ອງເປັນ string'})
    @IsNotEmpty({message: 'ກະລຸນາປ້ອນຊື່ເປັນອັງກິດ'})
    prov_name_eng: string;

    create_at: Date;
    update_at: Date;
}