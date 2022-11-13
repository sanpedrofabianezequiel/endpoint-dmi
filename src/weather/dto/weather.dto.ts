import { ApiProperty } from "@nestjs/swagger";
export class Weather {
    @ApiProperty()
    id:          number;
    @ApiProperty()
    main:        string;
    @ApiProperty()
    description: string;
    @ApiProperty()
    icon:        string;
}