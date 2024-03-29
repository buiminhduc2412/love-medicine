import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './components/home/home'
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/medlist" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
