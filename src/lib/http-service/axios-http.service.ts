const axios = require('axios');
import { API_KEY, API_UNITS, API_URL, DEFAULT_CITY } from "src/config";
import { METHOD } from "../const";
import { ExecuteOptions } from "../interfaces";
import { HttpService } from "./http.service";

export class AxiosHttpService extends HttpService {
 

  async execute<T = any>(method: METHOD, url: string, options?: ExecuteOptions): Promise<any> {
    try {
      const urlBase =`${API_URL}?appid=${API_KEY}&units=${API_UNITS}`;
      const response = await axios({
        method: method,
        url:`${urlBase}&q=${url || DEFAULT_CITY}`,
        headers: options?.headers ? { ...this.config.headers, ...options.headers } : this.config.headers,
      });
      const data = response.data;
      const statusCode = response.status;
      const headers = response.headers;
      return {
        data,
        statusCode,
      };
    } catch (error) {
      return {
        data: null,
        statusCode: error.response.status,
        statusText: error.response.statusText,
      };
    }
  }
}
