import * as React from 'react';
import {
  TransitionProps, Transition, TransitionState, splitTimeout
} from '../index';
import * as cx from 'classnames';

require('animate.css/animate.css');

export enum AnimationType {
  bounce = 'bounce',
  bounceIn = 'bounceIn',
  bounceInDown = 'bounceInDown',
  bounceInLeft = 'bounceInLeft',
  bounceInRight = 'bounceInRight',
  bounceInUp = 'bounceInUp',
  bounceOut = 'bounceOut',
  bounceOutDown = 'bounceOutDown',
  bounceOutLeft = 'bounceOutLeft',
  bounceOutRight = 'bounceOutRight',
  bounceOutUp = 'bounceOutUp',
  fadeIn = 'fadeIn',
  fadeInDown = 'fadeInDown',
  fadeInDownBig = 'fadeInDownBig',
  fadeInLeft = 'fadeInLeft',
  fadeInLeftBig = 'fadeInLeftBig',
  fadeInRight = 'fadeInRight',
  fadeInRightBig = 'fadeInRightBig',
  fadeInUp = 'fadeInUp',
  fadeInUpBig = 'fadeInUpBig',
  fadeOut = 'fadeOut',
  fadeOutDown = 'fadeOutDown',
  fadeOutDownBig = 'fadeOutDownBig',
  fadeOutLeft = 'fadeOutLeft',
  fadeOutLeftBig = 'fadeOutLeftBig',
  fadeOutRight = 'fadeOutRight',
  fadeOutRightBig = 'fadeOutRightBig',
  fadeOutUp = 'fadeOutUp',
  fadeOutUpBig = 'fadeOutUpBig',
  flash = 'flash',
  flipInX = 'flipInX',
  flipInY = 'flipInY',
  flipOutX = 'flipOutX',
  flipOutY = 'flipOutY',
  headShake = 'headShake',
  hinge = 'hinge',
  jackInTheBox = 'jackInTheBox',
  jello = 'jello',
  lightSpeedIn = 'lightSpeedIn',
  lightSpeedOut = 'lightSpeedOut',
  pulse = 'pulse',
  rollIn = 'rollIn',
  rollOut = 'rollOut',
  rotateIn = 'rotateIn',
  rotateInDownLeft = 'rotateInDownLeft',
  rotateInDownRight = 'rotateInDownRight',
  rotateInUpLeft = 'rotateInUpLeft',
  rotateInUpRight = 'rotateInUpRight',
  rotateOut = 'rotateOut',
  rotateOutDownLeft = 'rotateOutDownLeft',
  rotateOutDownRight = 'rotateOutDownRight',
  rotateOutUpLeft = 'rotateOutUpLeft',
  rotateOutUpRight = 'rotateOutUpRight',
  rubberBand = 'rubberBand',
  shake = 'shake',
  slideInDown = 'slideInDown',
  slideInLeft = 'slideInLeft',
  slideInRight = 'slideInRight',
  slideInUp = 'slideInUp',
  slideOutDown = 'slideOutDown',
  slideOutLeft = 'slideOutLeft',
  slideOutRight = 'slideOutRight',
  slideOutUp = 'slideOutUp',
  swing = 'swing',
  tada = 'tada',
  wobble = 'wobble',
  zoomIn = 'zoomIn',
  zoomInDown = 'zoomInDown',
  zoomInLeft = 'zoomInLeft',
  zoomInRight = 'zoomInRight',
  zoomInUp = 'zoomInUp',
  zoomOut = 'zoomOut',
  zoomOutDown = 'zoomOutDown',
  zoomOutLeft = 'zoomOutLeft',
  zoomOutRight = 'zoomOutRight',
  zoomOutUp = 'zoomOutUp',
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
  return {
    [TransitionState.entering]: cx(['animated', type]),
    [TransitionState.entered]: cx([]),
  }[state];

};