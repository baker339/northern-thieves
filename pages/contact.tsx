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
        <div className={styles.social_container} style={{ fontSize: "65px" }}>
          <div>
            <a href="mailto:email@example.com">
              <Email fontSize={"inherit"} />
            </a>
          </div>
          <div>
            <a href="https://facebook.com/profile.php?id=100089698571974">
              <Facebook fontSize={"inherit"} />
            </a>
          </div>
          <div>
            <a href="https://twitter.com/NorthernThieves">
              <Twitter fontSize={"inherit"} />
            </a>
          </div>
        </div>
      </main>
    </>
  );
}
