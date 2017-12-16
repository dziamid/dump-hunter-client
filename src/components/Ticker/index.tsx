import * as React from 'react';
import styled from 'styled-components';
import { TransitionGroup } from 'react-transition-group';
import { TickerRow } from './TickerRow';

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
