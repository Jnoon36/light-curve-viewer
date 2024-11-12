import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { test, expect, describe } from 'vitest';
import App from '../renderer/App';

test('App', () => {
  describe('should render', () => {
    expect(render(<App />)).toBeTruthy();
  });
});
