import * as React from 'react';
import styled from 'styled-components';
import { CurrencyChange } from '../../types/index';
import { UUID } from '../../utils/uuid';

const {SlideInDown} = require('animate-css-styled-components');

export type TickerRow = (CurrencyChange & UUID)[];

export interface OwnProps {
  rows: TickerRow[];
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
  line-height: 30px;
  padding: 0 5px;
  margin: 5px;
`;

const getRowKey = (row: TickerRow) => row[0].uuid;

export const Ticker = ({rows}: Props) => {
  const [first, ...following] = rows;

  return (
    <div style={{overflow: 'hidden', height: 5 * 40, border: '1px solid black'}}>
      <Table>
        <SlideInDown duration="0.8s" delay="1s">
          <Row key={getRowKey(first)}>
            {first.map(({name, price, change}) => (
              <Cell>
                {name}
              </Cell>
            ))}
          </Row>
        </SlideInDown>
        {following.map((row) => (
          <Row key={getRowKey(row)}>
            {row.map(({name, price, change}) => (
              <Cell>
                {name}
              </Cell>
            ))}
          </Row>
        ))}
      </Table>
    </div>
  );
};
