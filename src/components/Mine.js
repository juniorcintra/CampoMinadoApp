import React from 'react';
import {View, StyleSheet} from 'react-native';

const Mine = props => {
  const {container, coreMine, line} = styles;
  return (
    <View style={container}>
      <View style={coreMine} />
      <View style={line} />
      <View style={[line, {transform: [{rotate: '45deg'}]}]} />
      <View style={[line, {transform: [{rotate: '90deg'}]}]} />
      <View style={[line, {transform: [{rotate: '135deg'}]}]} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  coreMine: {
    height: 14,
    width: 14,
    backgroundColor: '#000',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  line: {
    position: 'absolute',
    height: 3,
    width: 20,
    borderRadius: 3,
    backgroundColor: '#000',
  },
});
export default Mine;
