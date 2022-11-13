import { Injectable, NestMiddleware } from '@nestjs/common';

@Injectable()
export class WeatherMiddleware implements NestMiddleware {
  use(req: any, res: any, next: () => void) {
    const url =  req.url;
    const city = url.split('=')[1].replace(/%20/g, ' ');  
    console.log('middleware',city);
    next();
  }

}
