import Head from "next/head";
import styles from "../styles/Home.module.css";

const Home = () => {
    return (
        <>
            <Head>
                <title>LtPcShop | ltPs</title>
                <meta name="description" content="shop of pc components" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className={styles.container}>
                <h1>Home</h1>
            </div>
        </>
    );
};

export default Home;
