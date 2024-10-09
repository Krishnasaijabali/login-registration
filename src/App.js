import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Login';
import Register from './registration';
import { Navigate } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Routes>
            <Route path="/Login" element={<Login />} />
            <Route path="/" element={<Navigate to="/login" />} />
            <Route path="/registration" element={<Register />} />
          </Routes>
        </header>
      </div>
    </Router>
  );
}

export default App;
