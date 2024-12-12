// App.test.tsx
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { ThemeProvider } from '@emotion/react';
import theme from '../renderer/contexts/themeContext';
import App from '../renderer/App';
import { AppContextProvider } from '../renderer/contexts/appContext';

// A helper function to render the component with the context provider
const renderWithContext = () => {
  render(
    <ThemeProvider theme={theme}>
      <AppContextProvider>
        <App />
      </AppContextProvider>
    </ThemeProvider>,
  );
};

describe('App Component with contexts', () => {
  it('should render the app with theme context data', () => {
    renderWithContext();
    const appHeaderElement = screen.getByTestId('custom-app-bar'); // id from the appHeader component
    const { backgroundColor } = window.getComputedStyle(appHeaderElement);
    expect(backgroundColor).toEqual(theme.palette.lcvGray);
  });
});
