import * as React from 'react';
import styled from 'styled-components';
import { CurrencyCode, CurrencyChange } from '../../../types';
import { CurrencyIcon } from '../../CurrencyIcon';
import { getCurrencyChangeCode, getCurrencyName } from '../../../utils/currency';

const Cell = styled.div`
  background: white;
  color: black;
  line-height: 40px;
  padding: 0 5px;
  margin: 5px;
  
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  
  > *:first-child {
    padding: 0 5px 0 0;
  }
  
  > *:last-child {
    flex: 1;
    text-align: right;
  }
`;

interface TickerCellProps extends CurrencyChange {

}

export const TickerCell = ({name, change}: TickerCellProps) => {
  const currencyCode = getCurrencyChangeCode(name);
  const currencyName = getCurrencyName(currencyCode);
  const changePercent = (change * 100).toFixed(2);
  const changePrefix = change > 0 ? '+' : '-';

  return (
    <Cell>
      <CurrencyIcon
        code={currencyCode}
        width={20}
        height={20}
      />
      <span>{currencyName}</span>
      <span>{`${changePrefix}${changePercent}%`}</span>
    </Cell>
  );
};