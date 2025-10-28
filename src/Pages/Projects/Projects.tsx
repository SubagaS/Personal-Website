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
          <Card
            thumbnailSrc="/src/assets/images/Sign-up-form-thumbnail.jpg"
            siteLink="https://subagas.github.io/Frontend-mentor/Newbie/Sign-up-form-with-intro/"
            codeLink="https://github.com/SubagaS/Sign-up-form-with-intro"
            projectTitle="Sign Up Form"
            stackUsed="HTML | CSS | Javascript"
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
          <Card
            thumbnailSrc="/src/assets/images/Recipe-page-thumbnail.jpg"
            siteLink="https://subagas.github.io/Frontend-mentor/Newbie/recipe-page/"
            codeLink="https://github.com/SubagaS/Frontend-Mentor/tree/main/recipe-page"
            projectTitle="Recipe Page"
            stackUsed="HTML | CSS"
          />
        </div>
      </main>
    </>
  );
}
export default Projects;
