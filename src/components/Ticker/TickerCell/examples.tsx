import * as React from 'react';
import { CurrencyChange } from '../../../types';
import { TickerCell } from './index';

const change: CurrencyChange = {
  'name': 'BTC_ETH',
  'price': 0.04088294,
  'change': -0.02682837
};

export const basic = () => (
  <div style={{width: 200}}>
    <TickerCell {...change} />
  </div>
);
