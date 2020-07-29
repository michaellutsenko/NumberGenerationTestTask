import { log } from '../log';

// We're not using any middleware, so the action creator should
// just return an action, i.e. an object
export const generateNumbers = () => {
  // [0, 1, 2] are just three numbers, they don't matter, they could've
  // been [0, 0, 0] or any other numbers. What matters is that it's an
  // array of three elements. Calling map() on it will return an array
  // of three elements, which is exactly what we need. It could've been
  // done with a for-loop, but this is a nice way of making it just one
  // line.
  // Math.random() returns a number between 0 and 1. By multiplying it
  // by 10 we get numbers from 0 to 10, not including 10. Math.floor()
  // ensures they're just one digit. Perfect for our needs.
  const numbers = [0, 1, 2].map(() => Math.floor(Math.random() * 10));

  // Recording the newly generated numbers into the log
  log(numbers);
  return { type: 'NUMBERS_GENERATE', numbers };
};
