import * as React from 'react';
import styled from 'styled-components';

export interface OwnProps {

}

export interface Props extends OwnProps {
}

const Root = styled.div`
  background: papayawhip;
  color: palevioletred; 
`;

export const Ticker = ({}: Props) => {
  return (
    <Root>
      Ticker component!
    </Root>
  );
};
