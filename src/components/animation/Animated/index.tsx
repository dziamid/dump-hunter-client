import * as React from 'react';
import { TransitionProps, Transition, TransitionState } from '../index';
import { AnimationType, getDefaultStyles, getTransitionStyles, transitionStyles } from '../types/index';

interface AnimatedProps {
  in: boolean;
  type?: AnimationType;
  duration?: number;
}

export const Animated: React.SFC<AnimatedProps> = (props) => {
  const {in: inProp, type = AnimationType.fade, duration = 300, children} = props;

  return (
    <Transition in={inProp} timeout={duration}>
      {(state: TransitionState) => (
        <div style={{...getDefaultStyles(type, duration), ...getTransitionStyles(type, state)}}>
          {children}
        </div>
      )}
    </Transition>
  );
};
