import Header from '../../sections/Header/header';
import HorizontalRule from '../../Components/HorizontalRule/horizontalRule';
import Card from '../../Components/Card/cardProject';
import styles from './styles.module.css';

function Projects() {
  return (
    <>
      <Header />
      <main className={styles.mainProjectContainer}>
        <h2>Showcasing my talent and Passion</h2>
        <HorizontalRule />
        <div className={styles.projectContainer}>
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
        </div>
      </main>
    </>
  );
}
export default Projects;