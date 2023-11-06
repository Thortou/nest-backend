import{ ApiProperty } from '@nestjs/swagger';
export class PCommandResponse<Data> {
    @ApiProperty()
    message: string;
    data: Data
}
