import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import InsuranceInfo from './pages/InsuranceInfo';
import SearchGuide from './pages/SearchGuide';
import CommunityEvents from './pages/CommunityEvents';
import Donations from './pages/Donations';
import { InsuranceProvider } from './context/InsuranceContext';
import './App.css';

function App() {
  return (
    <InsuranceProvider>
      <Router>
        <div className="app">
          <Navbar />
          <main className="main-content">
            <Routes>
              <Route path="/" element={<InsuranceInfo />} />
              <Route path="/insurance-info" element={<InsuranceInfo />} />
              <Route path="/search-guide" element={<SearchGuide />} />
              <Route path="/community" element={<CommunityEvents />} />
              <Route path="/donations" element={<Donations />} />
            </Routes>
          </main>
        </div>
      </Router>
    </InsuranceProvider>
  );
}

export default App;
