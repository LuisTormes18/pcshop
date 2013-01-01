import styles from "../../styles/Layout.module.css";
import SearchForm from './SearchForm';
const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.navbar}>
                <h2 className={styles.logo}><small>pc</small>Shop</h2>
                {/* <nav>Navbar</nav> */}
            </div>
            <div className={styles.menu}>

               <SearchForm />

                {/* <div>c</div> */}
                <div>Login</div>
            </div>
        </header>
    );
};

export default Header;
