import styles from './styles.module.css';
import HorizontalRule from '../../Components/HorizontalRule/horizontalRule';
function MySkills() {
  return (
    <>
      <h3 className={styles.skillSectionTitle}>What Do I Do And How?</h3>
      <p className={styles.skillSectionPara}>
        I love to craft functional solutions for unique problems. These are some
        skills I've picked up over my career.
      </p>
      <div className={styles.skillCardsContainer}>
        <div className={styles.skillCard}>
          <div className={styles.skillCardTitle}>
            <div className={styles.iconContainer}>
              <img
                src="/src/assets/images/Graphic-design-icon.png"
                alt="graphic-design"
                className={styles.skillIcon}
              />
            </div>
            <h4 className={styles.skillTitle}>Graphic design</h4>
          </div>

          <p className={styles.skillPara}>
            As a graphic designer I love turning ideas into visuals. Whether it
            is a brand identity or a social media campaign, I approach every
            design with curiosity and intention. For me, design is about
            emotion, balance, and the quiet details.
          </p>
        </div>
      </div>
      <div className={styles.skillCardsContainer}>
        <div className={styles.skillCard}>
          <div className={styles.skillCardTitle}>
            <div className={styles.iconContainer}>
              <img
                src="/src/assets/images/Graphic-design-icon.png"
                alt="graphic-design"
                className={styles.skillIcon}
              />
            </div>
            <h4 className={styles.skillTitle}>Graphic design</h4>
          </div>

          <p className={styles.skillPara}>
            As a graphic designer I love turning ideas into visuals. Whether it
            is a brand identity or a social media campaign, I approach every
            design with curiosity and intention. For me, design is about
            emotion, balance, and the quiet details.
          </p>
        </div>
      </div>
      <div className={styles.skillCardsContainer}>
        <div className={styles.skillCard}>
          <div className={styles.skillCardTitle}>
            <div className={styles.iconContainer}>
              <img
                src="/src/assets/images/Graphic-design-icon.png"
                alt="graphic-design"
                className={styles.skillIcon}
              />
            </div>
            <h4 className={styles.skillTitle}>Graphic design</h4>
          </div>

          <p className={styles.skillPara}>
            As a graphic designer I love turning ideas into visuals. Whether it
            is a brand identity or a social media campaign, I approach every
            design with curiosity and intention. For me, design is about
            emotion, balance, and the quiet details.
          </p>
        </div>
      </div>
      <HorizontalRule />
    </>
  );
}

export default MySkills;
