import * as React from 'react';
import styled from 'styled-components';
import { CurrencyChange } from '../../types/index';
import { animateCSS } from '../animation/AnimateCSS';
import { AnimationType } from '../animation/AnimateCSS/types';
import { TransitionGroup } from 'react-transition-group';

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
        <TransitionGroup>
          {rows.map((row) => (
            <TickerRow key={row.uuid} {...row} />
          ))}
        </TransitionGroup>
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

const animateNewTickerRow = animateCSS({
  type: AnimationType.fadeInDown,
  timeout: 500,
  inProp: 'in',
});

interface TickerRowProps extends TickerRow {
  className: string;
  style: React.CSSProperties;
}

const TickerRow = animateNewTickerRow(({changes, className, style}: TickerRowProps) => {
  return (
    <Row className={className} style={style}>
      {changes.map(({name, price, change}, i) => (
        <Cell key={i}>
          {name} - {price}
        </Cell>
      ))}
    </Row>
  );
});
