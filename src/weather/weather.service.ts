import { CACHE_MANAGER, Inject, Injectable } from "@nestjs/common";
import { Cache } from "cache-manager";
import { METHOD } from "src/lib";
import { ApiHttpService } from "src/plataform";
import { ENUM_CACHE_MANAGER } from "./const";
import { IWeather } from "./interfaces";

const HTTP_STATUS_OK = 200;
const TEMPERATURE = 15;

@Injectable()
export class WeatherService {
  private readonly weather: IWeather[] = [];

  constructor(@Inject(CACHE_MANAGER) private cacheManager: Cache) {}

  async getWeather(city: string): Promise<IWeather> {
    const dataCache = await this.getCache(city, ENUM_CACHE_MANAGER.CITY);
    if (dataCache !== undefined) {
      return dataCache;
    } else {
      const data = await ApiHttpService.execute(METHOD.GET, city);
      return this.hasWeather(data) ? this.getWeatherData(city, (await data.data) as IWeather) : data;
    }
  }
  async getWeatherTemperature(city: string): Promise<boolean> {
    const dataCache = await this.getCache(city, ENUM_CACHE_MANAGER.CITY_BY_TEMPERATURE);
    if (dataCache !== undefined) {
      return dataCache;
    } else {
      console.log("api");
      const data = await ApiHttpService.execute(METHOD.GET, city);
      return this.hasWeather(data) ? this.getWeatherByTemperature(city, (await data.data) as IWeather) : data;
    }
  }
  private hasWeather(data: any): boolean {
    return data.statusCode === HTTP_STATUS_OK;
  }

  private async getWeatherByTemperature(city: string, data: IWeather): Promise<boolean> {
    const result = data.main.temp > TEMPERATURE;
    await this.setCache(city, ENUM_CACHE_MANAGER.CITY_BY_TEMPERATURE, result);
    return result;
  }

  private async getWeatherData(city: string, data: IWeather): Promise<IWeather> {
    const result = data;
    await this.setCache(city, ENUM_CACHE_MANAGER.CITY, result);
    return result;
  }

  async setCache(city: string, key: ENUM_CACHE_MANAGER, value: any): Promise<void> {
    await this.cacheManager.set(this.mergeCache(city, key), value);
  }

  async getCache(city: string, key: ENUM_CACHE_MANAGER): Promise<any> {
    return await this.cacheManager.get(this.mergeCache(city, key));
  }

  async deleteCache(city: string, key: ENUM_CACHE_MANAGER): Promise<void> {
    await this.cacheManager.del(this.mergeCache(city, key));
  }


  mergeCache(city: string, key: ENUM_CACHE_MANAGER): string {
    return `${city}-${key}`;
  }
}
