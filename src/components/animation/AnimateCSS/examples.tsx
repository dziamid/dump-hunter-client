import * as React from 'react';
import { AnimateCSS, AnimationType } from './index';
import { TransitionGroup } from 'react-transition-group';

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

export const animatedList = () => <AnimatedList/>;

class AnimatedList extends React.Component<{}, { items: string[] }> {
  state = {items: ['hello', 'world', 'click', 'me']};

  handleAdd(item: string = new Date().toISOString()) {
    this.setState({
      items: [
        item,
        ...this.state.items,
      ]
    });
  }

  handleRemove(i: number) {
    let newItems = this.state.items.slice();
    newItems.splice(i, 1);
    this.setState({items: newItems});
  }

  render() {
    return (
      <div>
        <div style={{height: '200px', overflow: 'hidden'}}>
          <TransitionGroup>
            {this.state.items.map((item, i) => (
              <AnimateCSS key={item} type={AnimationType.fadeInDown} timeout={500}>
                <div>{item}<button onClick={() => this.handleRemove(i)}>&times;</button></div>
              </AnimateCSS>
            ))}
          </TransitionGroup>
        </div>
        <button onClick={() => this.handleAdd()}>Add Item</button>
      </div>
    );
  }
}
