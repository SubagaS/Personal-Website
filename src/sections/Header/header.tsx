import HamburgerMenu from '../../Components/HamburgerMenu/hambugerMenu';
import styles from './styles.module.css';
function Header() {
  return (
    <>
    
      <header className={styles.headerSection}>
        <a href="#" className={styles.headerName}>
          Subaga<span>.</span>
        </a>
        <HamburgerMenu />
      </header>
     
    </>
  );
}
export default Header;
