import { CurrencyCode } from '../types';

const data: CurrencyData[] = require('./currency/index.json');
interface CurrencyData {
  tokens: string[];
  symbol: CurrencyCode;
  name: string;
  rank: number;
  slug: string;
}

type CurrencyNames = {[key in CurrencyCode]: string};

const names: Partial<CurrencyNames> = data.reduce((result, item) => {
  return {...result, [item.symbol]: item.name};
}, {});

export const getCurrencyName = (code: CurrencyCode): string => {
  return names[code];
};

export const getCurrencyChangeCode = (name: string): CurrencyCode => {
  return name.split('_')[1] as CurrencyCode;
};
