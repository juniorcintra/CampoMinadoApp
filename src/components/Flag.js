import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Flag = props => {
  const {
    container,
    flag,
    flagpole,
    base1,
    base2,
    flagBigger,
    flagpoleBigger,
    base1Bigger,
    base2Bigger,
  } = styles;
  return (
    <View style={container}>
      <View style={[flagpole, props.bigger ? flagpoleBigger : null]} />
      <View style={[flag, props.bigger ? flagBigger : null]} />
      <View style={[base1, props.bigger ? base1Bigger : null]} />
      <View style={[base2, props.bigger ? base2Bigger : null]} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 2,
  },
  flagpole: {
    position: 'absolute',
    height: 14,
    width: 2,
    backgroundColor: '#222',
    marginLeft: 9,
  },
  flag: {
    position: 'absolute',
    height: 5,
    width: 6,
    backgroundColor: '#F22',
    marginLeft: 3,
  },
  base1: {
    position: 'absolute',
    height: 2,
    width: 6,
    backgroundColor: '#222',
    marginLeft: 7,
    marginTop: 10,
  },
  base2: {
    position: 'absolute',
    height: 2,
    width: 10,
    backgroundColor: '#222',
    marginLeft: 5,
    marginTop: 12,
  },
  flagpoleBigger: {
    height: 28,
    width: 4,
    marginLeft: 16,
  },
  flagBigger: {
    height: 10,
    width: 14,
    marginLeft: 3,
  },
  base1Bigger: {
    height: 4,
    width: 12,
    marginLeft: 20,
    marginTop: 12,
  },
  base2Bigger: {
    height: 4,
    width: 20,
    marginLeft: 8,
    marginTop: 24,
  },
});

export default Flag;
