import * as React from 'react';
import { Ticker, TickerRow } from './index';
import { changes } from './mock';
import { CurrencyChange } from '../../types/index';
import { UUID, ensureUUID } from '../../utils/uuid';
import { getTickerRows } from './utils';

export const basic = () => <Ticker rows={getTickerRows(changes)}/>;

class Animating extends React.Component<{}, { changes: CurrencyChange[] }> {
  constructor(props: {}) {
    super(props);

    this.state = {
      changes: changes,
    };

  }
  componentDidMount() {

    setInterval(() => {
      const newData: CurrencyChange[] = changes.slice(0, 5);

      this.setState({
        changes: [...newData, ...this.state.changes],
      });
    }, 5000);
  }

  render() {
    return (
      <Ticker rows={getTickerRows(this.state.changes)}/>
    );
  }
}

export const animating = () => <Animating/>;
