interface AnyObject {
  [k: string]: any;
}

export interface HttpServiceConfig {
  baseUrl?: string;
  headers?: AnyObject;
}

export interface ExecuteOptions {
  body?: AnyObject;
  headers?: AnyObject;
}
