import Head from "next/head";
import styles from "../styles/Home.module.css";
import Navbar from "../components/NavBar";

export default function Home() {
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
        <div className={styles.center}>
          <div
            className={styles.title}
            style={{
              display: "flex",
              flexDirection: "column",
              fontSize: "100px",
            }}
          >
            <h1>Northern</h1>
            <h1>Thieves</h1>
          </div>
          {/* <div className={styles.logo}> */}
          {/* <img
              src="./light_logo.png"
              style={{
                width: "50%",
                height: "auto",
                boxShadow: "5px 10px 18px #888888",
              }}
            /> */}

          {/* </div> */}
        </div>
        <div className={styles.description}></div>

        <div className={styles.grid}></div>
      </main>
    </>
  );
}
