import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="card">
        <p>Titlo de tarjeta</p>
        <p>Subtitulo</p>
      </div>
    </div>
  );
}
