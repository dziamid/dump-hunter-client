import { connect, Dispatch } from 'react-redux';
import { Action, bindActionCreators } from 'redux';
import { StoreState } from '../../../store/types';
import { Ticker } from '../../../components/Ticker';
import { getHomeTickerRows } from '../../../store/reducers/home';

export const mapState = (state: StoreState) => {
  return {
    rows: getHomeTickerRows(state),
  };
};

export const mapDispatch = (dispatch: Dispatch<Action>) => {
  return bindActionCreators({}, dispatch);
};

export const TickerHome = connect(mapState, mapDispatch)(Ticker);
