import React from 'react';
import {Provider} from 'react-redux';
import store from './app/store';
import actions from './app/actions';

import {
  SafeAreaView,
  StyleSheet
} from 'react-native';

import Counter from './app/components/Counter';

const App = () => {
  const {incrementCounter, decrementCounter} = actions;

  return (
    <Provider store={store}>
      <SafeAreaView style={styles.container}>
        <Counter
          value={store.getState()}
          onIncrement={() => store.dispatch(incrementCounter)}
          onDecrement={() => store.dispatch(decrementCounter)}
        />
      </SafeAreaView>
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default App;
