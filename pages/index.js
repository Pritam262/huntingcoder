import Head from "next/head";
import Script from "next/script";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
// import Navbar from '../components/navbar'

export default function Home() {
  return (
    <>
      <Head>
        <title>Hunting coder</title>
        <meta
          name="description"
          content="This is a blog page for Coding Hunter"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <Navbar/> */}
      <main className={styles.main}>
        <h1 className={styles.title}> Coding Hunter</h1>
        <Image
          className={styles.myImg}
          src="/coder.jpg"
          width={450}
          height={200}
        />
        <p className={styles.description}>
          A blog for the coders by a hunting coder
        </p>
          <h2>Popular Blogs</h2>
        
          <div className={styles.blogs}>
            <div className={styles.blogItem}>
              <h3>How to learn JavaScript in 2023</h3>
              <p>JavaScript is the language used to design for the web</p>
            </div>
            <div className={styles.blogItem}>
              <h3>How to learn JavaScript in 2023</h3>
              <p>JavaScript is the language used to design for the web</p>
            </div>
            <div className={styles.blogItem}>
              <h3>How to learn JavaScript in 2023</h3>
              <p>JavaScript is the language used to design for the web</p>
            </div>
            <div className={styles.blogItem}>
              <h3>How to learn JavaScript in 2023</h3>
              <p>JavaScript is the language used to design for the web</p>
            </div>
            <div className={styles.blogItem}>
              <h3>How to learn JavaScript in 2023</h3>
              <p>JavaScript is the language used to design for the web</p>
            </div>
            <div className={styles.blogItem}>
              <h3>How to learn JavaScript in 2023</h3>
              <p>JavaScript is the language used to design for the web</p>
            </div>
            <div className={styles.blogItem}>
              <h3>How to learn JavaScript in 2023</h3>
              <p>JavaScript is the language used to design for the web</p>
            </div>
            <div className={styles.blogItem}>
              <h3>How to learn JavaScript in 2023</h3>
              <p>JavaScript is the language used to design for the web</p>
            </div>
            <div className={styles.blogItem}>
              <h3>How to learn JavaScript in 2023</h3>
              <p>JavaScript is the language used to design for the web</p>
            </div>
          </div>
        
      </main>
    </>
  );
}
