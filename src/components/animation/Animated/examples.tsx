import * as React from 'react';
import { Animated } from './index';
import { TransitionGroup } from 'react-transition-group';
import { AnimationType } from '../index';

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
          <Animated in={!!show} type={AnimationType.fade} timeout={500}>
            Hello, I should fade.
          </Animated>
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
        ...this.state.items,
        item,
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
        <TransitionGroup>
          {this.state.items.map((item, i) => (
            <Animated key={item} type={AnimationType.fade} timeout={500}>
              {item}
              <button onClick={() => this.handleRemove(i)}>&times;</button>
            </Animated>
          ))}
        </TransitionGroup>
        <button onClick={() => this.handleAdd()}>Add Item</button>
      </div>
    );
  }
}
