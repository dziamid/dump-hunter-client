import * as React from 'react';
import styled from 'styled-components';
import { TransitionGroup } from 'react-transition-group';
import { ROW_HEIGHT, TickerRow } from './TickerRow';

export const CELLS = 4;
export const ROWS = 5;

export interface TickerProps {
  rows: TickerRow[];
}

export const Ticker = ({rows}: TickerProps) => {
  return (
    <div style={{overflow: 'hidden', height: ROWS * ROW_HEIGHT, border: '1px solid black'}}>
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
