import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './pages/Home'
import Selections from './pages/Selections';

export default function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/selections" element={<Selections />} />
        </Routes>
      </Router>
    </div>
  )
}