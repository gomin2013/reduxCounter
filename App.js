import React, {Component} from 'react';
import {Provider} from 'react-redux';

import {
  SafeAreaView,
  StyleSheet
} from 'react-native';

import Counter from './app/components/Counter';
import {createStore} from 'redux';

const initialState = {
  text: 'Hello!',
  count: 0
};

const reducers = (state = {}, action) => {
  switch (action.type) {
    case 'CHANGE_TEXT':
      return {
        ...state,
        text: action.text
      };

    case 'INCREMENT':
      return {
        ...state,
        count: state.count + 1
      };

    case 'DECREMENT':
      return {
        ...state,
        count: state.count - 1
      };

    default:
      return state;
  }
};

const store = createStore(reducers, initialState);

class App extends Component {
  render() {
    store.subscribe(() => console.log(store.getState()));
    store.subscribe(() => console.log(store.getState()));
    return (
      <Provider store={store}>
        <SafeAreaView style={styles.container}>
          <Counter
            value={store.getState()}
            onChangeText={() => store.dispatch({type: 'CHANGE_TEXT', text: 'Hello Changed!'})}
            onIncrement={() => store.dispatch({type: 'INCREMENT'})}
            onDecrement={() => store.dispatch({type: 'DECREMENT'})}
          />
        </SafeAreaView>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default App;
