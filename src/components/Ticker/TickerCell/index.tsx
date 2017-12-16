import * as React from 'react';
import styled from 'styled-components';
import { CurrencyChange } from '../../../types';

const BtcIcon = require('../../svg/btc.svg').default;

const Cell = styled.div`
  background: papayawhip;
  color: palevioletred;
  flex: 1;
  line-height: 30px;
  padding: 0 5px;
  margin: 5px;
`;

interface TickerCellProps extends CurrencyChange {

}

export const TickerCell = ({name, change}: TickerCellProps) => (
  <Cell>
    <BtcIcon width={20} height={20}/> {name} - {change * 100}
  </Cell>
);