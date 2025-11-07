import styles from './styles.module.css';
import AccordionSkill from '../../Components/AccordionSkill/accordion';

function MySkills() {
  return (
    <>
      <h3 className={styles.skillSectionTitle}>What I can do for you?</h3>
      <p className={styles.skillSectionPara}>
        I love to craft functional solutions for unique problems. These are some
        skills I've picked up over my career.
      </p>
      <AccordionSkill />
    </>
  );
}

export default MySkills;
