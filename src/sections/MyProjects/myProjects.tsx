import styles from './styles.module.css';
import Card from '../../Components/Card/cardProject';

function MyProjects() {
  return (
    <>
      <h3 className={styles.projectTitle}>Projects</h3>
      <p className={styles.aboutProject}>
        I craft digital solutions that showcase my passion and expertise in
        design and development.
      </p>
      <div className={styles.cardContainer}>
        <Card
          thumbnailSrc="/src/assets/images/Ticket-generator-thumbnail.jpg"
          siteLink="https://subagas.github.io/Frontend-mentor/Junior/Conference-ticket-generator/"
          codeLink="https://github.com/SubagaS/Conference-ticket-generator"
          projectTitle="Conference Ticket Generator"
          stackUsed="Typescript | React | CSS | Vite"
        />
        <Card
          thumbnailSrc="/src/assets/images/Browser-extension-UI-thumbnail.jpg"
          siteLink="https://subagas.github.io/Frontend-mentor/Junior/Browser-extension/"
          codeLink="https://github.com/SubagaS/Browser-extension-manager-UI"
          projectTitle="Browser Extension Manager UI"
          stackUsed="Javascript | React | CSS | Vite"
        />
        <Card
          thumbnailSrc="/src/assets/images/Interactive-rating-component.jpg"
          siteLink="https://subagas.github.io/Frontend-mentor/Newbie/interactive-rating-component/"
          codeLink="https://github.com/SubagaS/Interactive-rating-component"
          projectTitle="Interactive Rating Component"
          stackUsed="Typescript | React | CSS | Vite"
        />
        <Card
          thumbnailSrc="/src/assets/images/FAQ-accordion-component.jpg"
          siteLink="https://subagas.github.io/Frontend-mentor/Newbie/faq-accordion/"
          codeLink="https://github.com/SubagaS/FAQ-accordion"
          projectTitle="FAQ Accordion"
          stackUsed="Typescript | React | CSS | Vite"
        />
      </div>
      <div className={styles.exploreBtn}>
        <a href="">
          <button className={styles.moreProjectsBtn}>
            Explore more projects
          </button>
        </a>
      </div>
    </>
  );
}
export default MyProjects;
