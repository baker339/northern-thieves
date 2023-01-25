import Head from "next/head";
import styles from "../styles/Home.module.css";
import Navbar from "../components/NavBar";

export default function AboutUs() {
  return (
    <>
      <Head>
        <title>Northern Thieves</title>
        <meta
          name="Northern Thieves Band"
          content="Official website for the band Northern Thieves"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo_letters_dark.ico" />
      </Head>
      <Navbar />
      <main className={styles.main}>
        <div className={styles.description}>
          <div>
            Northern Thieves is a punk rock band from Charlotte, North Carolina.
            <br />
            They are currently working on new music and are hoping to begin
            performing by the end of 2023.
          </div>
        </div>

        <div className={styles.grid}></div>
      </main>
    </>
  );
}
