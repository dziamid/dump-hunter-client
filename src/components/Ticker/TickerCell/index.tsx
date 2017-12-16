import * as React from 'react';
import styled from 'styled-components';
import { Currency, CurrencyChange } from '../../../types';
import { CurrencyIcon } from '../../CurrencyIcon';

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
    <CurrencyIcon name={Currency.bcy} width={20} height={20}/> {name} - {change * 100}
  </Cell>
);