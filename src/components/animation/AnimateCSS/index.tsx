import * as React from 'react';
import {
  TransitionProps, Transition, TransitionState, splitTimeout
} from '../index';
import * as cx from 'classnames';
import { AnimationType } from './types';

require('animate.css/animate.css');

interface AnimatedProps extends TransitionProps {
  type: AnimationType;
  timeout: number | { enter: number, exit: number };
}

interface AnimateCSSConfig extends TransitionProps {
  type: AnimationType;
  timeout: number | { enter: number, exit: number };
  inProp: string;
}

type AnimateCSS = (config: AnimateCSSConfig) => (ComposedComponent: React.SFC<any>) => React.SFC<any>;

export const animateCSS: AnimateCSS = config => ComposedComponent => props => {
  const {type, timeout, inProp} = config;
  const {enter, exit} = splitTimeout(timeout);
  const {className, style = {}, ...otherProps} = props;

  return (
    <Transition in={props[inProp]} timeout={{enter, exit}}>
      {
        (state: TransitionState) => (
          <ComposedComponent
            {...otherProps}
            className={cx(className, getTransitionClassName(type, state))}
            style={{...style, animationDuration: `${enter}ms`}}
          />
        )
      }
    </Transition>
  );
};

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
  return {
    [TransitionState.entering]: cx(['animated', type]),
    [TransitionState.entered]: cx([]),
  }[state];

};