import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { generateNumbers } from '../store/actions';
import {
  StatusBar,
  SafeAreaView,
  TouchableOpacity,
  Text,
  StyleSheet,
} from 'react-native';
import NumbersView from './NumbersView';

import { showLog } from '../log';

const MainView = () => {
  const numbers = useSelector((state) => state.numbers);
  const dispatch = useDispatch();

  const generateNewNumbers = () => {
    dispatch(generateNumbers());
  };

  // Generate numbers on mount (the empty dependency array)
  useEffect(generateNewNumbers, []);

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <NumbersView numbers={numbers} />
        <TouchableOpacity onPress={generateNewNumbers} style={styles.button}>
          <Text style={styles.buttonLabel}>Generate</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={showLog} style={styles.button}>
          <Text style={styles.buttonLabel}>Show Log</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  button: {
    alignSelf: 'stretch',
    marginHorizontal: '15%',
    paddingVertical: 15,
    backgroundColor: '#5f67ec',
    borderRadius: 10,
    elevation: 2,
    shadowColor: 'black',
    shadowOpacity: 0.2,
    shadowRadius: 10,
    marginTop: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonLabel: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    textTransform: 'uppercase',
  },
});

export default MainView;
