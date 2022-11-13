import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { WeatherMiddleware } from './common/middleware/weather.middleware';
import { CoreModule } from './core/core.module';
import { WeatherController } from './weather/weather.controller';
import { WeatherModule } from './weather/weather.module';
@Module({
  imports: [ CoreModule, WeatherModule ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(WeatherMiddleware)
      .forRoutes(WeatherController);
  }
}
