import { expect, afterEach } from 'vitest';
import { cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/vitest';

// Automatically clean up after each test
afterEach(() => {
  cleanup();
});

// Add custom matchers
expect.extend({
  toBeInTheDocument: (received) => {
    const pass = received !== null && received !== undefined;
    return {
      pass,
      message: () => `expected ${received} ${pass ? 'not to' : 'to'} be in the document`,
    };
  },
});