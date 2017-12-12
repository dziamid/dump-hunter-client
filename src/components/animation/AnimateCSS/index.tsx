import * as React from 'react';
import {
  TransitionProps, Transition, TransitionState, splitTimeout
} from '../index';
import * as cx from 'classnames';

require('animate.css/animate.css');

export enum AnimationType {
  flash = 'flash',
  shake = 'shake',
}

interface AnimatedProps extends TransitionProps {
  type: AnimationType;
  timeout: number | { enter: number, exit: number };
}

export const AnimateCSS: React.SFC<AnimatedProps> = (props) => {
  const {type, timeout, children, ...other} = props;
  const {enter, exit} = splitTimeout(timeout);

  return (
    <Transition timeout={{enter, exit}} {...other}>
      {(state: TransitionState) => (
        <div
          className={getTransitionClassName(type, state)}
          style={{animationDuration: `${enter}ms`}}
        >
          {children}
        </div>
      )}
    </Transition>
  );
};

const getTransitionClassName = (type: AnimationType, state: TransitionState): string => {
  console.log('state', state);
  return {
    [TransitionState.entering]: cx(['animated', type]),
    [TransitionState.entered]: cx([]),
  }[state];

};