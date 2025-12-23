import Header from '../../sections/Header/header';
import Footer from '../../sections/Footer/footer';
import HorizontalRule from '../../Components/HorizontalRule/horizontalRule';
import DesignCard from '../../Components/DesignCard/designCard';
import uxCaseStudy from '/src/assets/images/we-learn-case-study.jpg';
import weLearnIos from '/src/assets/images/weLearn-iOS.jpg';
import weLearnAndroid from '/src/assets/images/weLearn-android.jpg';
import weLearnLanding from '/src/assets/images/weLearn-landing-pages.jpg';
import socialMedia from '/src/assets/images/social-media-posts-thumbnail.jpg';
import marketingCreatives from '/src/assets/images/marketing-creatives-thumbnail.jpg';
import webBanner from '/src/assets/images/web-banner-thumbnail.jpg';

import richAndRich from '/src/assets/images/rich-and-rich-thumbnail.jpg';
import lilifi from '/src/assets/images/lilifi-thumbnail.jpg';
import bobbaBrew from '/src/assets/images/bobba-brew-thumbnail.jpg';

import styles from './styles.module.css';
function Design() {
  return (
    <>
      <Header />
      <main>
        <h4 className={styles.aboutDesign}>My Design Projects</h4>
        <HorizontalRule />
        <section className={styles.designCardContainer}>
          <DesignCard
            designImgSrc={uxCaseStudy}
            designTitle="WeLearn - UX Case Study"
            designSkills="Figma | Photoshop | Illustrator"
            designLink="https://www.behance.net/gallery/170132755/WeLearn-UX-Case-Study"
          />
          <DesignCard
            designImgSrc={weLearnIos}
            designTitle="WeLearn - iOS Screen"
            designSkills="Figma | Photoshop | Illustrator"
            designLink="https://www.behance.net/gallery/170132475/WeLearn-iOS-Screens"
          />
          <DesignCard
            designImgSrc={weLearnAndroid}
            designTitle="WeLearn - Android Screen"
            designSkills="Figma | Photoshop | Illustrator"
            designLink="https://www.behance.net/gallery/170131941/WeLearn-Android-Screens"
          />
          <DesignCard
            designImgSrc={weLearnLanding}
            designTitle="WeLearn - Landing Page"
            designSkills="Figma | Photoshop | Illustrator"
            designLink="https://www.behance.net/gallery/170130607/WeLearn-Landing-Page"
          />
          <DesignCard
            designImgSrc={socialMedia}
            designTitle="Social Media Posts"
            designLink="https://www.behance.net/gallery/238104177/Social-Media-Posts"
            designSkills="Photoshop | Illustrator"
          />
          <DesignCard
            designImgSrc={marketingCreatives}
            designTitle="Marketing Creatives"
            designSkills="Photoshop | Illustrator"
            designLink="https://www.behance.net/gallery/238109387/Marketing-Creatives"
          />
          <DesignCard
            designImgSrc={webBanner}
            designTitle="Website Banner"
            designSkills="Photoshop | Illustrator"
            designLink="https://www.behance.net/gallery/237979203/Website-Banner"
          />
          <DesignCard
            designImgSrc={richAndRich}
            designTitle="Rich And Rich"
            designSkills="Photoshop | Illustrator"
            designLink="https://www.behance.net/gallery/238459483/Rich-And-Rich"
          />
          <DesignCard
            designImgSrc={lilifi}
            designTitle="Lilifi"
            designSkills="Photoshop | Illustrator"
            designLink="https://www.behance.net/gallery/238448563/Lilifi"
          />
          <DesignCard
            designImgSrc={bobbaBrew}
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
