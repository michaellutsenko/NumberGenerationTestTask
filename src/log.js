// A super-simple implementation of log
// The task specifies that the log must not be saved into redux
import { Alert } from 'react-native';

// The records are kept here
const history = [];

// Add a new record to the log
export const log = (numbers) => {
  history.push(numbers);
};

// Display log
// Using React Native's Alert API here
// The history is an array of arrays
// The first join inside map transforms all records into strings
// separated with commas. The second join then combines the records
// into one string with "new line" symbol as the delimeter
export const showLog = () =>
  Alert.alert('Log', history.map((numbers) => numbers.join(', ')).join('\n'));
