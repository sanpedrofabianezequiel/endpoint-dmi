import { CacheInterceptor, Controller, Get, Query, UseInterceptors } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { WeatherResponseDto } from './dto';
import { FindCityWeatherDto } from './dto/find-city-weather.dto';
import { IWeather } from './interfaces';
import { WeatherService } from './weather.service';

@ApiTags('weather')
@Controller('weather')
export class WeatherController {
  constructor(private readonly weatherService: WeatherService) {}

  @UseInterceptors(CacheInterceptor)
  @Get()
  @ApiResponse({ status: 200, description: 'The information has been successfully returned.',type:WeatherResponseDto})
  @ApiResponse({ status: 400, description: 'Bad Request.'})
  @ApiResponse({ status: 403, description: 'Forbidden.'})
  @ApiResponse({ status: 404, description: 'Not Found.'})
  @ApiResponse({ status: 500, description: 'Internal Server Error.'})
  @ApiResponse({ status: 503, description: 'Service Unavailable.'})
  async getWeather(@Query()findCityWeatherDto: FindCityWeatherDto): Promise<IWeather> {
    return this.weatherService.getWeather(findCityWeatherDto.city);
  }

  @UseInterceptors(CacheInterceptor)
  @Get('/temperature')
  @ApiResponse({ status: 200, description: 'The information about the temperature has been successfully returned.',type: Boolean})
  @ApiResponse({ status: 400, description: 'Bad Request.'})
  @ApiResponse({ status: 403, description: 'Forbidden.'})
  @ApiResponse({ status: 404, description: 'Not Found.'})
  @ApiResponse({ status: 500, description: 'Internal Server Error.'})
  @ApiResponse({ status: 503, description: 'Service Unavailable.'})
  async getWeatherTemperature(@Query()findCityWeatherDto: FindCityWeatherDto): Promise<boolean> {
    return this.weatherService.getWeatherTemperature(findCityWeatherDto.city.toLowerCase());
  }
}