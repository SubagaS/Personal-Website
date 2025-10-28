import './App.css';
import Home from './Pages/Home/Home';
import Projects from './Pages/Projects/Projects';

import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Projects" element={<Projects />} />

      </Routes>
    </>
  );
}

export default App;
