import NavItem from "./NavItem";
import styles from '../../styles/Layout.module.css';

const Navbar = () => {
    return (
        <nav className={styles.navbar}>
            <NavItem href="/" text="Home" />
            <NavItem href="/shop" text="Shop" />
            <NavItem href="/contact" text="Contact" />
        </nav>
    );
};

export default Navbar;
