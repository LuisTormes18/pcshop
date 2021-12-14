import Head from "next/head";

import Slider from "../components/home/Slider";
import styles from "../styles/Home.module.css";

const Home = () => {
  return (
    <>
      <Head>
        <title>pcShop</title>
        <meta name="description" content="shop of pc components" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* section slider */}
      <section className={styles.section_slide}>
        <Slider /> 
      </section>
      <section className={styles.section_2}>
        <h1>Section 2</h1>
      </section>
      <section className={styles.section_3}>
        <h1>Section 3</h1>
      </section>
      <section className={styles.section_4}>
        <h1>Section 4</h1>
      </section>
    </>
  );
};

export default Home;
