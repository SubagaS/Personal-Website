import './App.css';
import Header from './sections/Header/header';
import AboutMe from './sections/AboutMe/aboutMe';
import MyProjects from './sections/MyProjects/myProjects';
import MySkills from './sections/MySkills/mySkills';

function App() {
  return (
    <>
      <div className="pageWrapper">
        <Header />
        <AboutMe />
        <MySkills />
        <MyProjects />
      </div>
    </>
  );
}

export default App;
