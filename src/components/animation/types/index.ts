import { TransitionState } from '../index';
import { fadeDefaults, fadeTransition } from './fade';

export enum AnimationType {
  fade = 'fade',
}

type Styles = object; // todo: replace with real Styles type implementation

export type TransitionStylesResolver = (state: TransitionState) => Styles;
export type DefaultStylesResolver = (duration: number) => Styles;

const defaultStyles: { [key in AnimationType]: DefaultStylesResolver } = {
  fade: fadeDefaults,
};

export const transitionStyles: {[key in AnimationType]: TransitionStylesResolver } = {
  fade: fadeTransition,
};

export const getDefaultStyles = (type: AnimationType, duration: number): Styles => {
  return defaultStyles[type](duration);
};

export const getTransitionStyles = (type: AnimationType, state: TransitionState): Styles => {
  return transitionStyles[type](state);
};