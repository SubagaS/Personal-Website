import { useState, useEffect, useRef, type JSX } from 'react';
import styles from './styles.module.css';

function HamburgerMenu(): JSX.Element {
  const [open, setOpen] = useState(false);
  const overlayRef = useRef<HTMLDivElement | null>(null);
  const toggle = () => {
    setOpen((f) => !f);
    console.log(open);
    console.log('It is open');
  };
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
  });
  const onBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === overlayRef.current) setOpen(false);
  };
  return (
    <>
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
        ref={overlayRef}
        aria-hidden={!open}
        tabIndex={-1}
        onClick={onBackdropClick}
      >
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
        <div>
          <img src="../../assets/images/frogiee.jpg" alt="froggie-Img" />
          <h3>Hi. I am Subaga. I am a front end developer based in Berlin.</h3>
          <p>Email: subaga.sree@gmail.com</p>
        </div>
      </div>
    </>
  );
}

export default HamburgerMenu;
