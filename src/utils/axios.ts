import Axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { isDebugMode } from './local-storage';
export { AxiosRequestConfig } from 'axios';

type Request = AxiosRequestConfig & { id: number };
type Response = AxiosResponse & { config: Request };

const createAxiosInstance = () => {
  const instance = Axios.create();
  let next = 1;

  if (isDebugMode() || process.env.REACT_APP_DEBUG) {
    instance.interceptors.request.use((request: Request) => {
      request.id = next++;
      console.log(...stringifyRequest(request));
      return request;
    });

    instance.interceptors.response.use((response: Response) => {
      console.log(...stringifyResponse(response));
      return response;
    });
  }

  return instance;
};

const stringifyRequestHead = (request: Request) => {
  const {id, url, method, data} = request;

  return `#${id} ${(method || '').toUpperCase()}: ${url}`;
}

const stringifyRequest = (request: Request) => {
  const {id, url, method, data} = request;

  return [`Request ${stringifyRequestHead(request)}:\n---\n`, data, `\n---\n`];
};

const stringifyResponse = (response: Response) => {
  const {config, data, status} = response;

  return [`Response ${stringifyRequestHead(config)}:\n---\n${status}\n`, data, `\n---\n`];
};

export const axios = createAxiosInstance();

export const queryData = async (config: AxiosRequestConfig) => {
  const {data} = await axios.request(config);

  return data;
};
