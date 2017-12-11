import { TransitionState } from '../index';
import { DefaultStylesResolver, TransitionStylesResolver } from './index';

export const fadeDefaults: DefaultStylesResolver = (duration: number) => ({
  transition: `opacity ${duration}ms ease-in-out`,
  opacity: 0,
});

export const fadeTransition: TransitionStylesResolver = (state: TransitionState) => ({
  entering: {opacity: 0},
  entered: {opacity: 1},
  exited: {},
  exiting: {},
}[state]);