import styles from './styles.module.css';
import Card from '../../Components/Card/cardProject';
import DesignCard from '../../Components/DesignCard/designCard';
import HorizontalRule from '../../Components/HorizontalRule/horizontalRule';
import { useNavigate } from 'react-router-dom';

function MyProjects() {
  const navigate = useNavigate();
  function handleSubmit() {
    navigate('/Projects');
  }
  function handleDesignSubmit() {
    navigate('/Design');
  }
  return (
    <section>
      <p className={styles.frontendProjectsTitle}>Frontend Projects</p>
      <p className={styles.frontendProjectsAbout}>
        My frontend projects are where design meets code. From interactive
        components to responsive web apps, each project is built with a strong
        focus on usability, performance, and attention to detail. I enjoy
        transforming ideas and designs into clean, functional experiences that
        feel intuitive, engaging, and polished across devices.
      </p>
      <div className={styles.frontendProjects}>
        <div className={styles.cardContainer}>
          <Card
            thumbnailSrc="/src/assets/images/github-user-search-thumbnail.jpg"
            siteLink="https://subagas.github.io/Frontend-mentor/Junior/Github-user-search/"
            codeLink="https://github.com/SubagaS/Github-user-search-app"
            projectTitle="Github User Search"
            stackUsed="Typescript | React | CSS | Vite"
          />
          <Card
            thumbnailSrc="/src/assets/images/Advice-generator-thumbnail.jpg"
            siteLink="https://subagas.github.io/Frontend-mentor/Junior/advice-generator-app/"
            codeLink="https://github.com/SubagaS/Advice-generator-app"
            projectTitle="Advice Generator App"
            stackUsed="Typescript | React | CSS | Vite"
          />
          <Card
            thumbnailSrc="/src/assets/images/Conference-ticket-generator-thumbnail.jpg"
            siteLink="https://subagas.github.io/Frontend-mentor/Junior/Conference-ticket-generator/"
            codeLink="https://github.com/SubagaS/Conference-ticket-generator"
            projectTitle="Conference Ticket Generator"
            stackUsed="Typescript | React | CSS | Vite"
          />
        </div>
        <button className={styles.moreProjectsBtn} onClick={handleSubmit}>
          Explore more frontend projects
        </button>
      </div>

      <HorizontalRule />

      <p className={styles.designProjectsTitle}>Design Projects</p>
      <p className={styles.designProjectsAbout}>
        As a designer, I turn my ideas into colors, layouts, and stories. I
        experiment with form, mood and meaning to create designs that don't just
        look good, but also stay memorable.
      </p>
      <div className={styles.designProjects}>
        <div className={styles.cardContainer}>
          <DesignCard
            designImgSrc="/src/assets/images/we-learn-case-study.jpg"
            designTitle="WeLearn - UX Case Study"
            designSkills="Figma | Photoshop | Illustrator"
            designLink="https://www.behance.net/gallery/170132755/WeLearn-UX-Case-Study"
          />
          <DesignCard
            designImgSrc="/src/assets/images/weLearn-iOS.jpg"
            designTitle="WeLearn - iOS Screen"
            designSkills="Figma | Photoshop | Illustrator"
            designLink="https://www.behance.net/gallery/170132475/WeLearn-iOS-Screens"
          />
          <DesignCard
            designImgSrc="/src/assets/images/web-banner-thumbnail.jpg"
            designTitle="Website Banner"
            designSkills="Photoshop | Illustrator"
            designLink="https://www.behance.net/gallery/237979203/Website-Banner"
          />
        </div>
        <button className={styles.moreProjectsBtn} onClick={handleDesignSubmit}>
          Explore more design projects
        </button>
      </div>

      <HorizontalRule />
    </section>
  );
}
export default MyProjects;
