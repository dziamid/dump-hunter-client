import * as React from 'react';
import styled from 'styled-components';
import { TransitionGroup } from 'react-transition-group';
import { TickerRow } from './TickerRow';
import { reverse } from 'ramda';

export const CELLS = 4;
export const ROWS = 5;
const ROW_HEIGHT = 50;

export interface TickerProps {
  rows: TickerRow[];
}

export const Ticker = ({rows}: TickerProps) => {
  return (
    <Root>
      <Table>
        <TransitionGroup>
          {reverse(rows).map((row) => (
            <TickerRow key={row.uuid} {...row} />
          ))}
        </TransitionGroup>
      </Table>
    </Root>
  );
};

const Table = styled.div`
  width: 100%;
  display: flex;
  overflow: hidden;
  flex-direction: column;
`;

const Root = styled.div`
  display: block;
  overflow: hidden;
  height: ${ROWS * ROW_HEIGHT}px;
  border: 1px solid black;
`;
