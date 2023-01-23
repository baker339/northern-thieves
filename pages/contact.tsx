import Head from "next/head";
import styles from "../styles/Home.module.css";
import Navbar from "../components/NavBar";
import { Email, Facebook, Twitter } from "@mui/icons-material";

export default function Contact() {
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
          {/* <div className={styles.logo}>
            <img
              src="./dark_logo.png"
              style={{
                width: "50%",
                height: "auto",
                boxShadow: "5px 10px 18px #888888",
              }}
            />
          </div> */}
        </div>
        <div className={styles.description} style={{ fontSize: "65px" }}>
          {/* <div>
            Northern Thieves is a punk rock band from Charlotte, North Carolina.
            <br />
            They are currently working on new music and are hoping to begin
            performing by the end of 2023.
          </div> */}
          <a href="mailto:email@example.com">
            <Email fontSize={"inherit"} />
          </a>
          <a href="https://facebook.com/profile.php?id=100089698571974">
            <Facebook fontSize={"inherit"} />
          </a>
          <a href="https://twitter.com/NorthernThieves">
            <Twitter fontSize={"inherit"} />
          </a>
        </div>

        <div className={styles.grid}></div>
      </main>
    </>
  );
}
