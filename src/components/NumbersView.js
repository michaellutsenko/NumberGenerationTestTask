import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const NumbersView = ({ numbers }) => (
  <View style={styles.container}>
    {numbers.map((number, index) => (
      <Text key={`number_${index}`} style={styles.numberBox}>
        {number}
      </Text>
    ))}
  </View>
);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 50,
  },
  numberBox: {
    borderWidth: 1,
    borderRadius: 10,
    padding: 30,
    fontSize: 20,
  },
});

export default NumbersView;
