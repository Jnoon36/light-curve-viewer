import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { AppContextProvider } from './contexts/appContext';
import Main from './pages/main';

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
