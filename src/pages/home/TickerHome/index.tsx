import { connect, Dispatch } from 'react-redux';
import { Action, bindActionCreators } from 'redux';
import { StoreState } from '../../../store/types';
import { Ticker, TickerProps } from '../../../components/Ticker';
import { getTickerRows } from '../../../components/Ticker/utils';

export const mapState = (state: StoreState) => {
  return {
    rows: getTickerRows(state.home.currencyChanges),
  };
};

export const mapDispatch = (dispatch: Dispatch<Action>) => {
  return bindActionCreators({}, dispatch);
};

export const TickerHome = connect(mapState, mapDispatch)(Ticker);
