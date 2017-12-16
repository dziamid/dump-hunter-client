import * as React from 'react';
import styled from 'styled-components';
import { CurrencyChange } from '../../../types';

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
    {name} - {change * 100}
  </Cell>
);