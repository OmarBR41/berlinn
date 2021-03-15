// Next imports
import Head from "next/head";

// Local components
import BackgroundSlider from "../BackgroundSlider";

// Component styles
import styles from "./layout.module.css";

export default function Layout({ children }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>BerlInn</title>
        <link rel="icon" href="/favicon.ico" />

        {/* Fonts pre-loading */}
        <link
          rel="preload"
          href="/fonts/DancingScript/DancingScript-Bold.ttf"
          as="font"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/fonts/Montserrat/Montserrat-Light.ttf"
          as="font"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/fonts/Montserrat/Montserrat-Regular.ttf"
          as="font"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/fonts/Montserrat/Montserrat-Medium.ttf"
          as="font"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/fonts/Montserrat/Montserrat-SemiBold.ttf"
          as="font"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/fonts/Montserrat/Montserrat-Bold.ttf"
          as="font"
          crossOrigin=""
        />
      </Head>

      <BackgroundSlider />

      <header>
        <h1 className={styles.title}>BerlInn</h1>
      </header>

      <main>{children}</main>
    </div>
  );
}
