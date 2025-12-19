import Header from './../../sections/Header/header';
import AboutMe from './../../sections/AboutMe/aboutMe';
import MyProjects from './../../sections/MyProjects/myProjects';
import MySkills from './../../sections/MySkills/mySkills';
import Footer from './../../sections/Footer/footer';
import styles from './styles.module.css';

function Home() {
  return (
    <>
      <Header />
      <main className={styles.mainContainer}>
        <AboutMe />
        <MyProjects />
        <MySkills />
      </main>
      <Footer />
    </>
  );
}
export default Home;
