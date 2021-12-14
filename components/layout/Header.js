import { useContext } from "react";
import Link from "next/link";
import styles from "../../styles/Layout.module.css";

import { authContext } from '../../context/auth/AuthProvider';

import Navbar from "./../ui/Navbar";

const Header = () => {
    const [ auth ] = useContext(authContext);

    return (
        <header className={styles.header}>
            <div className={styles.header_left}>
                <h2 className={styles.logo}>
                    <small>pc</small>Shop
                </h2>
                <Navbar />
            </div>
            <div className={styles.header_right}>
                <span>C</span>
                {
                    !auth.isAuthenticated
                         ?
                         ( 
                            <Link href="/login">
                             <a>Login</a>
                            </Link> 
                         ) 
                         :
                         (

                            <span>{auth.session.username}</span>
                         )
                }
            </div>
        </header>
    );
};

export default Header;
