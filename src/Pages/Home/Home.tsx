import Header from './../../sections/Header/header';
import AboutMe from './../../sections/AboutMe/aboutMe';
import MyProjects from './../../sections/MyProjects/myProjects';
import MySkills from './../../sections/MySkills/mySkills';
import Footer from './../../sections/Footer/footer';

function Home() {
  return (
    <>
      <Header />
      <main>
        <AboutMe />
        <MyProjects />
        <MySkills />
      </main>
      <Footer />
    </>
  );
}
export default Home;
