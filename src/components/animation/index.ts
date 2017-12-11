export { Transition } from 'react-transition-group';
export { TransitionProps } from 'react-transition-group/Transition';

export enum TransitionState {
  entered = 'entered',
  entering = 'entering',
  exited = 'exited',
  exiting = 'exiting',
}

import { fadeTransition } from './types/fade';

export enum AnimationType {
  fade = 'fade',
}

type Timeout = number | { enter: number, exit: number };
export type Timeouts = { enter: number, exit: number };

type Styles = object; // todo: replace with real Styles type implementation

export type TransitionStylesResolver = (timeout: Timeouts, state: TransitionState) => Styles;

export const transitionStyles: {[key in AnimationType]: TransitionStylesResolver } = {
  fade: fadeTransition,
};

export const getTransitionStyles = (type: AnimationType, timeout: Timeout, state: TransitionState): Styles => {
  return transitionStyles[type](splitTimeout(timeout), state);
};

export const splitTimeout = (timeout: Timeout): Timeouts => {
  const enter = typeof (timeout) === 'number' ? timeout : timeout.enter;
  const exit = typeof (timeout) === 'number' ? timeout : timeout.exit;

  return {enter, exit};
};
