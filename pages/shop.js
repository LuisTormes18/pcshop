import Head from "next/head";
import FilterBar from "../components/shop/FilterBar";
import styles from '../styles/Shop.module.css';

const Shop = () => {
	return (
		 <>
            <Head>
                <title>pcShop | Shop</title>
                <meta name="description" content="shop of pc components" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <header>
             	<FilterBar />            	
            </header>
			<div className={styles.container}>
				<div className={styles.grid}>

				</div>
			</div>
        </>
	)
}

export default Shop