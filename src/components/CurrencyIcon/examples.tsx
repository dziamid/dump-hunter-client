import * as React from 'react';
import { CurrencyIcon } from './index';
import { Currency } from '../../types';

export const all = () => {
  return (
    <div>
      {
        Object.keys(Currency).map(i => (
          <CurrencyIcon name={Currency[i]} />
        ))
      }
    </div>
  );
};
