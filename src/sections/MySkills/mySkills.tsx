import styles from './styles.module.css';
import AccordionSkill from '../../Components/AccordionSkill/accordion';

function MySkills() {
  return (
    <>
      <section>
        <h3 className={styles.skillSectionTitle}>What I can do for you?</h3>
        <p className={styles.skillSectionPara}>
          I can craft functional solutions for unique problems. These are some
          skills I've picked up over my career.
        </p>
        <AccordionSkill />
      </section>
    </>
  );
}

export default MySkills;
