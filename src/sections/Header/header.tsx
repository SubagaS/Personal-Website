import HamburgerMenu from '../../Components/HamburgerMenu/hambugerMenu';
import styles from './styles.module.css';
function Header() {
  return (
    <>
    
      <div className={styles.headerSection}>
        <a href="#" className={styles.headerName}>
          Subaga<span>.</span>
        </a>
        <HamburgerMenu />
      </div>
     
    </>
  );
}
export default Header;
