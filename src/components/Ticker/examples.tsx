import * as React from 'react';
import { Ticker, TickerRow } from './index';
import { changes } from './mock';
import { getTickerRows, createTickerRow } from './utils';

const rows = getTickerRows(changes);

class Animating extends React.Component<{}, { rows: TickerRow[] }> {
  constructor(props: {}) {
    super(props);

    this.state = {
      rows: rows,
    };

  }
  componentDidMount() {
    setInterval(() => {
      this.setState({
        rows: [createTickerRow(changes.slice(0, 5)), ...this.state.rows],
      });
    }, 5000);
  }

  render() {
    return (
      <Ticker rows={this.state.rows}/>
    );
  }
}

export const basic = () => <Ticker rows={rows}/>;
export const animating = () => <Animating/>;
