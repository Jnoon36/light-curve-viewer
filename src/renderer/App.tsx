import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { ThemeProvider } from '@emotion/react';
import { AppContextProvider } from './contexts/appContext';
import Main from './pages/main';
import theme from './contexts/themeContext';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <AppContextProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Main />} />
          </Routes>
        </Router>
      </AppContextProvider>
    </ThemeProvider>
  );
}
