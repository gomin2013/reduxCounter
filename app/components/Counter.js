import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';

class Counter extends Component {
  render() {
    const {value, onChangeText, onIncrement, onDecrement} = this.props;

    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={onChangeText}>
          <Text style={styles.countText}>
            {value.text}
          </Text>
        </TouchableOpacity>
        <Text style={styles.countText}>
          {value.count}
        </Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={onIncrement}>
            <Text style={styles.countText}>
              +
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={onDecrement}>
            <Text style={styles.countText}>
              -
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'stretch',
    flex: 1,
    justifyContent: 'space-around'
  },
  countText: {
    fontSize: 50,
    textAlign: 'center'
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around'
  }
});

Counter.propTypes = {
  value: PropTypes.object.isRequired,
  onChangeText: PropTypes.func.isRequired,
  onIncrement: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired
};

export default connect()(Counter);
