import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CalculatorPage from './pages/CalculatorPage';
import QuotePage from './pages/QuotePage';

function App() {
  return (
    <>
      <nav>
        <h1>Math Magicians</h1>
        <ul className="nav-ul">
          <li>
            <Link className="nav-ul-link" to="/">Home</Link>
          </li>
          <li>
            <Link className="nav-ul-link" to="/calculator">Calculator</Link>
          </li>
          <li>
            <Link className="nav-ul-link" to="/quote">Quote</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/calculator" element={<CalculatorPage />} />
        <Route path="/quote" element={<QuotePage />} />
      </Routes>
    </>
  );
}
export default App;
