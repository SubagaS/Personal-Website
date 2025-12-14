import styles from './styles.module.css';
import HorizontalRule from '../../Components/HorizontalRule/horizontalRule';
import SocialLinks from '../../Components/SocialLinks/socialLinks';
function Footer() {
  return (
    <>
      <footer className={styles.footerSection}>
        <div className={styles.contactMeSection}>
          <h2>Feel Free To Reach Out</h2>
          <div className={styles.linkBtnContainer}>
            <a href="mailto:subaga.sree@gmail.com" target="_blank">
              <button className={styles.contactLinkBtn}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
                  <path
                    fill="#dedede"
                    d="M112 128C85.5 128 64 149.5 64 176C64 191.1 71.1 205.3 83.2 214.4L291.2 370.4C308.3 383.2 331.7 383.2 348.8 370.4L556.8 214.4C568.9 205.3 576 191.1 576 176C576 149.5 554.5 128 528 128L112 128zM64 260L64 448C64 483.3 92.7 512 128 512L512 512C547.3 512 576 483.3 576 448L576 260L377.6 408.8C343.5 434.4 296.5 434.4 262.4 408.8L64 260z"
                  />
                </svg>
                Email
              </button>
            </a>

            <a href="https://www.linkedin.com/in/subaga/" target="_blank">
              <button className={styles.contactLinkBtn}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
                  <path
                    fill="#dedede"
                    d="M512 96L127.9 96C110.3 96 96 110.5 96 128.3L96 511.7C96 529.5 110.3 544 127.9 544L512 544C529.6 544 544 529.5 544 511.7L544 128.3C544 110.5 529.6 96 512 96zM231.4 480L165 480L165 266.2L231.5 266.2L231.5 480L231.4 480zM198.2 160C219.5 160 236.7 177.2 236.7 198.5C236.7 219.8 219.5 237 198.2 237C176.9 237 159.7 219.8 159.7 198.5C159.7 177.2 176.9 160 198.2 160zM480.3 480L413.9 480L413.9 376C413.9 351.2 413.4 319.3 379.4 319.3C344.8 319.3 339.5 346.3 339.5 374.2L339.5 480L273.1 480L273.1 266.2L336.8 266.2L336.8 295.4L337.7 295.4C346.6 278.6 368.3 260.9 400.6 260.9C467.8 260.9 480.3 305.2 480.3 362.8L480.3 480z"
                  />
                </svg>
                LinkedIn
              </button>
            </a>
            <a
              href="/src/assets/Docs/Subaga_Sreepathy_Resume_25.pdf"
              target="_blank"
            >
              <button className={styles.contactLinkBtn}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
                  <path
                    fill="#dedede"
                    d="M192 64C156.7 64 128 92.7 128 128L128 512C128 547.3 156.7 576 192 576L448 576C483.3 576 512 547.3 512 512L512 234.5C512 217.5 505.3 201.2 493.3 189.2L386.7 82.7C374.7 70.7 358.5 64 341.5 64L192 64zM453.5 240L360 240C346.7 240 336 229.3 336 216L336 122.5L453.5 240z"
                  />
                </svg>
                Resume
              </button>
            </a>
          </div>
        </div>
        <HorizontalRule />
        <div className={styles.linksFooter}>
          <p>&copy; 2025 all rights reserved</p>
          <SocialLinks width="1.7rem" height="1.7rem" />
        </div>
      </footer>
    </>
  );
}
export default Footer;
