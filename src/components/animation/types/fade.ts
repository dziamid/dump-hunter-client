import { TransitionStylesResolver } from '../index';

export const fadeTransition: TransitionStylesResolver = ({enter, exit}, state) => ({
  entering: {
    opacity: 0, // first render look
  },
  entered: {
    transition: `opacity ${enter}ms ease-in-out`,
    opacity: 1, // {enter} seconds after first render look
  },
  exiting: {
    transition: `opacity ${exit}ms ease-in-out`,
    opacity: 0, // will unmount look
  },
  exited: {
    opacity: 0, // {exit} seconds after will unmount look, right before unmount
  },
}[state]);