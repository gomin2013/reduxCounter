import React, {Component} from 'react';
import PropTypes from 'prop-types';

import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';
import {connect} from "react-redux";

class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: 'Hello!'
    };

    this.changeText = this.changeText.bind(this);
  }

  changeText() {
    this.setState({
      text: 'Hello Changed!'
    });
  }

  render() {
    const {value, onIncrement, onDecrement} = this.props;

    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this.changeText}>
          <Text style={styles.countText}>{this.state.text}</Text>
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
  onIncrement: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired
};

const mapStateToProps = (state) => {
  return {
    count: state.count
  };
};

export default connect(mapStateToProps)(Counter);
