import Header from '../../sections/Header/header';
import DesignCard from '../../Components/DesignCard/designCard';

import styles from './styles.module.css';
function Design() {
  return (
    <>
      <Header />
      <main>
        <h4 className={styles.aboutDesign}>
          My design journey reflects a deepening interest in understanding the
          intersection of user experience and visual aesthetics. Delving into
          this field, I recognize the importance of empathy and usability in
          creating designs that cater to user needs. Each project serves as a
          step toward building a portfolio that not only showcases my skills but
          also tells a story of growth and versatility.
        </h4>
        <section>
          <DesignCard
            designImgSrc="/src/assets/images/Cover.jpg"
            designTitle="Social Media Posts"
            designLink="https://www.behance.net/gallery/238104177/Social-Media-Posts"
            designSkills="Photoshop | Illustrator"
          />
        </section>
      </main>
    </>
  );
}
export default Design;
