import * as React from 'react';
import {
  TransitionProps, Transition, TransitionState, AnimationType, getTransitionStyles,
  splitTimeout
} from '../index';

interface AnimatedProps extends TransitionProps {
  type: AnimationType;
  timeout: number | { enter: number, exit: number };
}

export const Animated: React.SFC<AnimatedProps> = (props) => {
  const {type, timeout, children, ...other} = props;

  return (
    <Transition timeout={splitTimeout(timeout)} {...other}>
      {(state: TransitionState) => (
        <div style={{...getTransitionStyles(type, timeout, state)}}>
          {children}
        </div>
      )}
    </Transition>
  );
};
