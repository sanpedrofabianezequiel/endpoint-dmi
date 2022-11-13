import { ApiProperty } from "@nestjs/swagger";
import { Weather } from "./weather.dto";

export class Clouds {
  all: number;
}

export class Coord {
  lon: number;
  lat: number;
}
export class Main {
  temp: number;
  feelsLike: number;
  tempMin: number;
  tempMax: number;
  pressure: number;
  humidity: number;
}

export class Sys {
  type: number;
  id: number;
  country: string;
  sunrise: number;
  sunset: number;
}

export class Wind {
  speed: number;
  deg: number;
}
export class WeatherResponseDto {
  @ApiProperty({ type: Coord })
  coord: Coord;
  @ApiProperty({ type: [Weather] })
  weather: Weather[];
  @ApiProperty()
  base: string;
  @ApiProperty({ type: Main })
  main: Main;
  @ApiProperty()
  visibility: number;
  @ApiProperty({ type: Wind })
  wind: Wind;
  @ApiProperty({ type: Clouds })
  clouds: Clouds;
  @ApiProperty()
  dt: number;
  @ApiProperty({ type: Sys })
  sys: Sys;
  @ApiProperty()
  timezone: number;
  @ApiProperty()
  id: number;
  @ApiProperty()
  name: string;
  @ApiProperty()
  cod: number;
}
