import { METHOD } from '../const/method.enum';
import { ExecuteOptions, HttpServiceConfig } from '../interfaces/execute-response';

export const defaultHttpServiceConfig: HttpServiceConfig = {
  baseUrl: '',
  headers: { "Content-Type": "application/json" },
};

export abstract class HttpService {
  protected config: HttpServiceConfig;

  constructor(initialConfig?: Partial<HttpServiceConfig>) {
    this.config = { ...defaultHttpServiceConfig, ...initialConfig };
  }

  abstract execute<T = any>(method:METHOD,url:string,options?:ExecuteOptions):Promise<any>;
}
