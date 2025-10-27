import { useState, useEffect, type JSX } from 'react';
import styles from './styles.module.css';
import SocialLinks from '../SocialLinks/socialLinks';

function HamburgerMenu(): JSX.Element {
  const [open, setOpen] = useState(false);
  const toggle = () => {
    setOpen((f) => !f);
  };
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
  });

  return (
    <>
      <div className={styles.hamburgerContainer}>
        <button
          className={`${styles.hamburger} ${open ? styles.isOpen : ''}`}
          onClick={toggle}
          aria-expanded={open}
          aria-controls="full-menu"
          aria-label={open ? 'Close menu' : 'Open menu'}
        >
          <span className={styles.line} />
          <span className={styles.line} />
          <span className={styles.line} />
        </button>
        <div
          className={`${styles.overlay} ${open ? styles.open : ''}`}
          role="dialog"
          aria-hidden={!open}
          tabIndex={-1}
        >
          <div className={styles.menuAbtMe}>
            <img
              src="/src/assets/images/frogiee.jpg"
              alt="froggie-Img"
              className={styles.profileImg}
            />
            <h3 className={styles.abtMeText}>
              Hi. I am Subaga. I am a front end developer based in Berlin.
            </h3>
            <SocialLinks width="2.3rem" height="2.3rem" />
          </div>
          <nav className={styles.menu}>
            <ul>
              <li>
                <a href="#" onClick={() => setOpen(false)}>
                  Home
                </a>
              </li>
              <li>
                <a href="#" onClick={() => setOpen(false)}>
                  Projects
                </a>
              </li>
              <li>
                <a href="#" onClick={() => setOpen(false)}>
                  Graphic Design/Art
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
}

export default HamburgerMenu;
