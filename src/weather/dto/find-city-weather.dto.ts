import { ApiProperty } from "@nestjs/swagger";
import { IsString, Length } from "class-validator";

export class FindCityWeatherDto {
    @ApiProperty({
        description: 'City name example London | New York | Tokyo | buenos aires',
        required: true,
        nullable: false,
    })
    @IsString()
    @Length(2, 200)
    city: string;
}