import { axios, AxiosRequestConfig, queryData } from '../utils/axios';
import { CurrencyChange } from '../types';

const API_ENDPOINT = 'https://hunter.fakeplayers.com';

export async function fetchTickerCurrencyChanges(): Promise<CurrencyChange[]> {
  return queryData({url: `${API_ENDPOINT}/ticker/`});
}
