import * as React from 'react';
import styled from 'styled-components';
import { CurrencyChange } from '../../types/index';
import { splitEvery, take, pipe } from 'ramda';

export interface OwnProps {
  currencyChanges: CurrencyChange[];
}

export interface Props extends OwnProps {
}

const Table = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
`;

const Cell = styled.div`
  background: papayawhip;
  color: palevioletred;
  flex: 1;
`;

const limitRows = take<CurrencyChange>(6 * 5);
const splitRows = splitEvery(5);
const transpileRows = pipe(limitRows, splitRows);

export const Ticker = ({currencyChanges}: Props) => {

  const rows = transpileRows(currencyChanges);

  return (
    <Table>
      {rows.map((row) => (
        <Row>
          {row.map(({name, price, change}) => (
            <Cell>
              {name}
            </Cell>
          ))}
        </Row>
      ))}
    </Table>
  );
};
