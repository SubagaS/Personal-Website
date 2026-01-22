import Header from '../../sections/Header/header';
import Footer from '../../sections/Footer/footer';
import HorizontalRule from '../../Components/HorizontalRule/horizontalRule';
import Card from '../../Components/Card/cardProject';
import styles from './styles.module.css';
import githubUserThumbnail from '/src/assets/images/github-user-search-thumbnail.jpg';
import adviceThumbnail from '/src/assets/images/Advice-generator-thumbnail.jpg';
import conferenceTicketThumbnail from '/src/assets/images/Conference-ticket-generator-thumbnail.jpg';
import browserExtThumbnail from '/src/assets/images/Browser-extension-UI-thumbnail.jpg';
import signUpThumbnail from '/src/assets/images/Sign-up-form-thumbnail.jpg';
import interactiveRatingThumbnail from '/src/assets/images/Interactive-rating-component.jpg';
import faqThumbnail from '/src/assets/images/FAQ-accordion-component.jpg';
import recipeThumbnail from '/src/assets/images/Recipe-page-thumbnail.jpg';
import productCartThumbnail from '/src/assets/images/Product-list-with-cart-thumbnail.jpg';

function Projects() {
  return (
    <>
      <Header />
      <main className={styles.mainProjectContainer}>
        <h2 className={styles.projectIntro}>My Frontend Projects</h2>
        <HorizontalRule />
        <div className={styles.projectContainer}>
          <div className={styles.cardsContainer}>
            <Card
              thumbnailSrc={productCartThumbnail}
              siteLink="https://subagas.github.io/Frontend-mentor/Junior/Product-list-with-cart/"
              codeLink="https://github.com/SubagaS/Productlist-with-cart"
              projectTitle="Product list with cart"
              stackUsed="JavaScript | React | CSS | Vite"
            />
            <Card
              thumbnailSrc={githubUserThumbnail}
              siteLink="https://subagas.github.io/Frontend-mentor/Junior/Github-user-search/"
              codeLink="https://github.com/SubagaS/Github-user-search-app"
              projectTitle="Github User Search"
              stackUsed="Typescript | React | CSS | Vite"
            />
            <Card
              thumbnailSrc={adviceThumbnail}
              siteLink="https://subagas.github.io/Frontend-mentor/Junior/advice-generator-app/"
              codeLink="https://github.com/SubagaS/Advice-generator-app"
              projectTitle="Advice Generator App"
              stackUsed="Typescript | React | CSS | Vite"
            />
            <Card
              thumbnailSrc={conferenceTicketThumbnail}
              siteLink="https://subagas.github.io/Frontend-mentor/Junior/Conference-ticket-generator/"
              codeLink="https://github.com/SubagaS/Conference-ticket-generator"
              projectTitle="Conference Ticket Generator"
              stackUsed="Typescript | React | CSS | Vite"
            />
            <Card
              thumbnailSrc={browserExtThumbnail}
              siteLink="https://subagas.github.io/Frontend-mentor/Junior/Browser-extension/"
              codeLink="https://github.com/SubagaS/Browser-extension-manager-UI"
              projectTitle="Browser Extension Manager UI"
              stackUsed="Javascript | React | CSS | Vite"
            />
            <Card
              thumbnailSrc={signUpThumbnail}
              siteLink="https://subagas.github.io/Frontend-mentor/Newbie/Sign-up-form-with-intro/"
              codeLink="https://github.com/SubagaS/Sign-up-form-with-intro"
              projectTitle="Sign Up Form"
              stackUsed="HTML | CSS | Javascript"
            />
            <Card
              thumbnailSrc={interactiveRatingThumbnail}
              siteLink="https://subagas.github.io/Frontend-mentor/Newbie/interactive-rating-component/"
              codeLink="https://github.com/SubagaS/Interactive-rating-component"
              projectTitle="Interactive Rating Component"
              stackUsed="HTML | CSS | Javascript"
            />
            <Card
              thumbnailSrc={faqThumbnail}
              siteLink="https://subagas.github.io/Frontend-mentor/Newbie/faq-accordion/"
              codeLink="https://github.com/SubagaS/FAQ-accordion"
              projectTitle="FAQ Accordion"
              stackUsed="HTML | CSS | Javascript"
            />
            <Card
              thumbnailSrc={recipeThumbnail}
              siteLink="https://subagas.github.io/Frontend-mentor/Newbie/recipe-page/"
              codeLink="https://github.com/SubagaS/Frontend-Mentor/tree/main/recipe-page"
              projectTitle="Recipe Page"
              stackUsed="HTML | CSS"
            />
          </div>

          <a
            href="https://www.frontendmentor.io/profile/SubagaS"
            className={styles.moreProjects}
            target="_blank"
          >
            <button className={styles.moreProjectsBtn}>More Projects</button>
          </a>
          <HorizontalRule />
        </div>
        <Footer />
      </main>
    </>
  );
}
export default Projects;
