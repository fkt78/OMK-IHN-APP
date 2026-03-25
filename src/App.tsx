import { HashRouter, Routes, Route } from 'react-router-dom'
import Navigation from './components/Navigation'
import Home from './pages/Home'
import Quiz from './pages/Quiz'
import Checker from './pages/Checker'
import Rules from './pages/Rules'
import Fines from './pages/Fines'

export default function App() {
  return (
    <HashRouter>
      <div className="max-w-md mx-auto min-h-screen relative bg-slate-50">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/checker" element={<Checker />} />
          <Route path="/rules" element={<Rules />} />
          <Route path="/fines" element={<Fines />} />
        </Routes>
        <Navigation />
      </div>
    </HashRouter>
  )
}
