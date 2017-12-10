import { splitEvery, take, pipe, map } from 'ramda';

import { CurrencyChange } from '../../types/index';
import { TickerRow } from './index';
import { ensureUUID, UUID } from '../../utils/uuid';

const limitRows = take<CurrencyChange>(6 * 5);
const splitRows = splitEvery(5);
const mapUUID = map<CurrencyChange, CurrencyChange & UUID>(ensureUUID);

export const getTickerRows = pipe<CurrencyChange[], CurrencyChange[], TickerRow, TickerRow[]>(
  limitRows,
  mapUUID,
  splitRows,
);
