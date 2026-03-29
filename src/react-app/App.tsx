import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Shield } from './pages/Shield'; // Adjust this path to where you saved the Shield file

function App() {
  return (
    <Router>
      <div className="app-container">
        <Routes>
          {/* This is the route the Challenge Coin hits */}
          <Route path="/shield" element={<Shield />} />
          
          {/* We'll build these later this week */}
          <Route path="/" element={<div className="text-white p-10">Home Page (Coming Soon)</div>} />
          <Route path="/gospel" element={<div className="text-white p-10">The Gospel (Coming Soon)</div>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
