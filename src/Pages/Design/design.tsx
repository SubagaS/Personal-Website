import Header from '../../sections/Header/header';
import Footer from '../../sections/Footer/footer';
import HorizontalRule from '../../Components/HorizontalRule/horizontalRule';
import DesignCard from '../../Components/DesignCard/designCard';

import styles from './styles.module.css';
function Design() {
  return (
    <>
      <Header />
      <main>
        <h4 className={styles.aboutDesign}>
          My Design Projects
          {/* My design journey reflects a deepening interest in understanding the
          intersection of user experience and visual aesthetics. Delving into
          this field, I recognize the importance of empathy and usability in
          creating designs that cater to user needs. Each project serves as a
          step toward building a portfolio that not only showcases my skills but
          also tells a story of growth and versatility. */}
        </h4>
        <HorizontalRule />
        <section className={styles.designCardContainer}>
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
            designImgSrc="/src/assets/images/weLearn-android.jpg"
            designTitle="WeLearn - Android Screen"
            designSkills="Figma | Photoshop | Illustrator"
            designLink="https://www.behance.net/gallery/170131941/WeLearn-Android-Screens"
          />
          <DesignCard
            designImgSrc="/src/assets/images/weLearn-landing-pages.jpg"
            designTitle="WeLearn - Landing Page"
            designSkills="Figma | Photoshop | Illustrator"
            designLink="https://www.behance.net/gallery/170130607/WeLearn-Landing-Page"
          />
          <DesignCard
            designImgSrc="/src/assets/images/social-media-posts-thumbnail.jpg"
            designTitle="Social Media Posts"
            designLink="https://www.behance.net/gallery/238104177/Social-Media-Posts"
            designSkills="Photoshop | Illustrator"
          />
          <DesignCard
            designImgSrc="/src/assets/images/marketing-creatives-thumbnail.jpg"
            designTitle="Marketing Creatives"
            designSkills="Photoshop | Illustrator"
            designLink="https://www.behance.net/gallery/238109387/Marketing-Creatives"
          />
          <DesignCard
            designImgSrc="/src/assets/images/web-banner-thumbnail.jpg"
            designTitle="Website Banner"
            designSkills="Photoshop | Illustrator"
            designLink="https://www.behance.net/gallery/237979203/Website-Banner"
          />
          <DesignCard
            designImgSrc="/src/assets/images/rich-and-rich-thumbnail.jpg"
            designTitle="Rich And Rich"
            designSkills="Photoshop | Illustrator"
            designLink="https://www.behance.net/gallery/238459483/Rich-And-Rich"
          />
          <DesignCard
            designImgSrc="/src/assets/images/lilifi-thumbnail.jpg"
            designTitle="Lilifi"
            designSkills="Photoshop | Illustrator"
            designLink="https://www.behance.net/gallery/238448563/Lilifi"
          />
          <DesignCard
            designImgSrc="/src/assets/images/bobba-brew-thumbnail.jpg"
            designTitle="Bobba Brew"
            designSkills="Photoshop | Illustrator"
            designLink="https://www.behance.net/gallery/199068259/Boba-Brew"
          />
        </section>
      </main>
      <Footer />
    </>
  );
}
export default Design;
