import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { InsuranceProvider } from './context/InsuranceContext'
import Navbar from './components/Navbar'
import InsuranceInfo from './pages/InsuranceInfo'
import SearchGuide from './pages/SearchGuide'
import Community from './pages/Community'

export default function App() {
  return (
    <InsuranceProvider>
      <BrowserRouter>
        <div className="min-h-screen bg-gray-50 text-slate-900">
          <Navbar />
          <Routes>
            <Route path="/" element={<InsuranceInfo />} />
            <Route path="/search" element={<SearchGuide />} />
            <Route path="/community" element={<Community />} />
          </Routes>
        </div>
      </BrowserRouter>
    </InsuranceProvider>
  )
}