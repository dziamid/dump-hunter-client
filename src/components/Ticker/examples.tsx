import * as React from 'react';
import { Ticker } from './index';
import { changes } from './mock';

export const basic = () => <Ticker currencyChanges={changes} />;