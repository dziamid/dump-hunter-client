import * as React from 'react';
import { TransitionState } from '../index';
import Transition from 'react-transition-group/Transition';
import * as cx from 'classnames';
import { AnimateCSS, AnimationType } from './index';

export const flashingText = () => <FlashingText/>;

export class FlashingText extends React.Component<{}, { isFlashing: boolean }> {
  state = {isFlashing: false};

  toggleFlashing() {
    this.setState(({isFlashing}) => ({
      isFlashing: !isFlashing,
    }));
  }

  render() {
    const {isFlashing} = this.state;

    return (
      <div>
        <button onClick={() => this.toggleFlashing()}>
          Flash
        </button>
        <div>
          <AnimateCSS in={isFlashing} type={AnimationType.shake} timeout={{enter: 1000, exit: 0}}>
            Hey, i'm flashing!!!
          </AnimateCSS>
        </div>
      </div>
    );
  }
}

