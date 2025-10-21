import styles from './styles.module.css';
import SocialLinks from '../../Components/SocialLinks/socialLinks';
import HorizontalRule from '../../Components/HorizontalRule/horizontalRUle';

function AboutMe() {
  return (
    <>
     <HorizontalRule />
      <div className={styles.aboutMeContainer}>
        <h3 className={styles.aboutMeTitle}>About Me</h3>
        <div className={styles.socialLinksContainer}>
          <SocialLinks width="1.8rem" height="1.8rem" />
        </div>
      </div>

      <p className={styles.aboutMePara}>
        I am Subaga Sreepathy, a front-end developer with a background in
        graphic and UI/UX design. I specialize in designing apps, websites and
        graphics that are not only functional, but also aesthetically pleasing.
        This blend of design and development enables me to craft seamless
        digital experiences while continuously striving to grow in my field.
      </p>
      <HorizontalRule />
    </>
  );
}
export default AboutMe;
