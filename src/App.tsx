import './App.css';
import Header from './sections/Header/header';
import AboutMe from './sections/AboutMe/aboutMe';
import MyProjects from './sections/MyProjects/myProjects';

function App() {
  return (
    <>
      <div className="pageWrapper">
        <Header />
        <AboutMe />
        <MyProjects />
      </div>
    </>
  );
}

export default App;
