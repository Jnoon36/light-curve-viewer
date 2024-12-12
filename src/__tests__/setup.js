import { beforeAll, vi, expect } from 'vitest';
import { cleanup } from '@testing-library/react';
import * as matchers from '@testing-library/jest-dom/matchers';

expect.extend(matchers);

beforeAll(() => {
  window.electron = {
    ipcRenderer: {
      send: vi.fn(),
      on: vi.fn(),
      removeListener: vi.fn(),
      once: vi.fn(),
      sendMessage: vi.fn(),
      postMessage: vi.fn(),
    },
  };
});

afterEach(() => {
  cleanup();
});
