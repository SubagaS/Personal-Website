import HamburgerMenu from '../../Components/HamburgerMenu/hambugerMenu';
import styles from './styles.module.css';
import { Link } from 'react-router-dom';
function Header() {
  return (
    <>
      <header className={styles.headerSection}>
        <Link to="/" className={styles.headerName}>
          Subaga<span>.</span>
        </Link>
        <HamburgerMenu />
      </header>
    </>
  );
}
export default Header;
