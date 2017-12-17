import * as React from 'react';
import { CurrencyIcon } from './index';
import { CurrencyCode } from '../../types';

export const all = () => {
  return (
    <div>
      {
        Object.keys(CurrencyCode).map(i => (
          <CurrencyIcon code={CurrencyCode[i]} />
        ))
      }
    </div>
  );
};
