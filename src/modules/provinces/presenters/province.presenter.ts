import { ApiProperty } from "@nestjs/swagger";

export class ProvincePresenter {
    @ApiProperty()
    id: number;

    @ApiProperty()
    name: string;

    @ApiProperty()
    prov_name_eng: string;

    @ApiProperty()
    create_at: Date;

    @ApiProperty()
    update_at: Date;
}