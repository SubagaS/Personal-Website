import './App.css';
import Home from './Pages/Home/Home';
import Projects from './Pages/Projects/Projects';
import Design from './Pages/Design/design';
import ScrollToTop from './Components/ScrollToTop/scrollToTop';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Projects" element={<Projects />} />
        <Route path="/Design" element={<Design />} />
      </Routes>
    </>
  );
}

export default App;
