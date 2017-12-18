import { splitEvery, take, pipe, map, reverse } from 'ramda';

import { CurrencyChange } from '../../types/index';
import { uuid } from '../../utils/uuid';
import { TickerRow } from './TickerRow';
import { CELLS } from './index';

export const getTickerRows = (changes: CurrencyChange[]): TickerRow[] => {
  const groups = splitEvery(CELLS, reverse(changes));

  return groups.map(createTickerRow);
};

export const createTickerRow = (changes: CurrencyChange[]): TickerRow => {

  return {
    uuid: uuid(),
    changes: take(CELLS, changes),
  };
};
