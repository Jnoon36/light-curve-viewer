import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { Box } from '@mui/material';
import { AppContextProvider } from './contexts/appContext';
import AppHeader from './components/appHeader';

function Main() {
  return (
    <Box>
      <AppHeader />
      Some Generic Content
    </Box>
  );
}

export default function App() {
  return (
    <AppContextProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Main />} />
        </Routes>
      </Router>
    </AppContextProvider>
  );
}
