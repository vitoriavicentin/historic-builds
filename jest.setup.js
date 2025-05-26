import '@testing-library/jest-dom';

const originalError = console.error;
console.error = (...args) => {
  if (typeof args[0] === 'string' && args[0].includes('Duplicate key')) {
    return;
  }
  originalError.call(console, ...args);
};
