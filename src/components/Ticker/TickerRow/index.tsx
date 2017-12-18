import * as React from 'react';
import styled from 'styled-components';
import { animateCSS } from '../../animation/AnimateCSS';
import { AnimationType } from '../../animation/AnimateCSS/types';
import { CurrencyChange } from '../../../types';
import { TickerCell } from '../TickerCell';
import { reverse } from 'ramda';

const Row = styled.div`
  display: flex;
  flex-direction: row;
  
  > * {
    flex: 1;
  }
`;

const enhance = animateCSS({
  type: AnimationType.fadeInDown,
  timeout: {enter: 500, exit: 500},
  inProp: 'in',
});

interface TickerRowProps extends TickerRow {
  className: string;
  style: React.CSSProperties;
}

export interface TickerRow {
  uuid: string;
  changes: CurrencyChange[];
}

export const TickerRow = enhance(({changes, className, style}: TickerRowProps) => {
  return (
    <Row className={className} style={style}>
      {reverse(changes).map((change, i) => (
        <TickerCell key={i} {...change} />
      ))}
    </Row>
  );
});
