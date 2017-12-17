import { splitEvery, take, pipe, map } from 'ramda';

import { CurrencyChange } from '../../types/index';
import { uuid } from '../../utils/uuid';
import { TickerRow } from './TickerRow';

export const CELLS_IN_ROW = 4;

export const getTickerRows = (changes: CurrencyChange[]): TickerRow[] => {
  const groups = splitEvery(CELLS_IN_ROW, changes);

  return groups.map(createTickerRow);
};

export const createTickerRow = (changes: CurrencyChange[]): TickerRow => {

  return {
    uuid: uuid(),
    changes: take(CELLS_IN_ROW, changes),
  };
};
