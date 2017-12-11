import * as React from 'react';
import { Animated } from './index';
import { AnimationType } from '../types/index';

export const animatedText = () => <AnimatedText/>;

export class AnimatedText extends React.Component<{}, { show: boolean }> {
  state = {show: false};

  handleToggle() {
    this.setState(({show}) => ({
      show: !show
    }));
  }

  render() {
    const {show} = this.state;

    return (
      <div>
        <button onClick={() => this.handleToggle()}>
          Click to toggle
        </button>
        <div>
          <Animated in={!!show} type={AnimationType.fade} duration={500}>
            Hello, I should fade.
          </Animated>
        </div>
      </div>
    );
  }
}
