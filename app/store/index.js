import {createStore} from 'redux';
import reducers from '../reducers';

const defaultState = {
  count: 0
};

export default createStore(reducers, defaultState);
