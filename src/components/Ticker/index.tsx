import * as React from 'react';
import styled from 'styled-components';
import { CurrencyChange } from '../../types/index';

export interface TickerRow {
  uuid: string;
  changes: CurrencyChange[];
}

export interface TickerProps {
  rows: TickerRow[];
}

export const Ticker = ({rows}: TickerProps) => {
  return (
    <div style={{overflow: 'hidden', height: 5 * 40, border: '1px solid black'}}>
      <Table>
        {rows.map((row) => (
          <Row key={row.uuid}>
            {row.changes.map(({name, price, change}) => (
              <Cell>
                {name} - {price}
              </Cell>
            ))}
          </Row>
        ))}
      </Table>
    </div>
  );
};

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
  line-height: 30px;
  padding: 0 5px;
  margin: 5px;
`;
