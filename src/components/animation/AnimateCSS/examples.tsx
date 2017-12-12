import * as React from 'react';
import { animateCSS, AnimateCSS } from './index';
import { TransitionGroup } from 'react-transition-group';
import { AnimationType } from './types';

const flashingTextAnimation = animateCSS({
  type: AnimationType.fadeInDown,
  timeout: 500,
  inProp: 'in', // managed for us by TransitionGroup
});

const Text = flashingTextAnimation(() => {
  return (
    <div>
      {`Hey, i'm flashing!!!`}
    </div>
  );
});

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
            <Text/>
          </AnimateCSS>
        </div>
      </div>
    );
  }
}

interface AnimatedListItemProps {
  className?: string;
  style?: React.CSSProperties;
  title: string;
  onRemove: Function;
}

const arrayItemAnimation = animateCSS({
  type: AnimationType.fadeInDown,
  timeout: 500,
  inProp: 'in', // managed for us by TransitionGroup
});

const AnimatedListItem = arrayItemAnimation(({style, className, title, onRemove}: AnimatedListItemProps) => (
  <div className={className} style={style}>
    {title}
    <button onClick={() => onRemove()}>&times;</button>
  </div>
));

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
              <AnimatedListItem
                key={item}
                title={item}
                onRemove={() => this.handleRemove(i)}
              />
            ))}
          </TransitionGroup>
        </div>
        <button onClick={() => this.handleAdd()}>Add Item</button>
      </div>
    );
  }
}

export const animatedList = () => <AnimatedList/>;
export const flashingText = () => <FlashingText/>;
