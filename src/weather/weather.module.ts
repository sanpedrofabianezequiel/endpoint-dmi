import { CacheModule, Module } from "@nestjs/common";
import { WeatherController } from "./weather.controller";
import { WeatherService } from "./weather.service";

@Module({
    controllers: [WeatherController],
    providers: [WeatherService],
    imports:[CacheModule.register({
        ttl: 20, // seconds
        max: 10, // maximum number of items in cache
    })]

})
export class WeatherModule {}