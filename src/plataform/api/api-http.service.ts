import { AxiosHttpService } from "../../lib/http-service";

class ApiHttpService extends AxiosHttpService {
  constructor() {
    super({ headers: { "Content-Type": "application/json" } });
  }
}

const instance =  new ApiHttpService();
export { instance as ApiHttpService };

