import './App.css';
import Header from './sections/Header/header';
import AboutMe from './sections/AboutMe/aboutMe';
import MyProjects from './sections/MyProjects/myProjects';
import MySkills from './sections/MySkills/mySkills';
import Footer from './sections/Footer/footer';

function App() {
  return (
    <>
      <div className="pageWrapper">
        <Header />
        <AboutMe />
        <MyProjects />
        <MySkills />
        <Footer />
      </div>
    </>
  );
}

export default App;
