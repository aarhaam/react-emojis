import styles from './navbar.module.css';

import searchIcon from '../../assets/search-icon.svg';
import emojiIcon from '../../assets/emoji-icon.svg';

const Navbar = () => {
    return (
        <nav className={styles.nav}>
            <img style={{ marginRight:8 }} className={styles.navIcon} src={searchIcon} alt="Search Icon"/>
            <img style={{ marginTop:3 }} className={styles.navIcon} src={emojiIcon} alt="Emoji Icon"/>
            <span className={styles.navTitle}>Er</span>
        </nav>
    )
}

export default Navbar;