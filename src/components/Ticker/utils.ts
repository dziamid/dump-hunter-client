import { splitEvery, take, pipe, map } from 'ramda';

import { CurrencyChange } from '../../types/index';
import { uuid } from '../../utils/uuid';
import { TickerRow } from './index';

export const getTickerRows = (changes: CurrencyChange[]): TickerRow[] => {
  const groups = splitEvery(5, changes);

  return groups.map(createTickerRow);
}

export const createTickerRow = (changes: CurrencyChange[]): TickerRow => {
  return {
    uuid: uuid(),
    changes,
  };
}