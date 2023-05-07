
import './App.css';
import HomePage from './pages/HomePage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import CoinPage from './pages/CoinPage/CoinPage';
import ComparePage from './pages/ComparePage';
import Chartex from './pages/Chartex/Chartex';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/coin/:id" element={<CoinPage />} />
          <Route path="/compare" element={<ComparePage />} />
          <Route path="/chart" element={<Chartex />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
