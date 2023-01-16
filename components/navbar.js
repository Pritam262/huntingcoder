import React, { useRef } from "react";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import { useRouter } from "next/router";
function Navbar() {
  const router = useRouter();
  const link = router.query;
  const openLink = (e) => {
    e.preventDefault();
    const value = e.target
    console.log(value)
  };
  return (
    <nav className={styles.mainNav}>
      <ul >
        <Link href='/'><li className={styles.navLink}>Home</li></Link>
        <Link href='about'><li className={styles.navLink}>About</li></Link>
        <Link href='blog'><li className={styles.navLink}>Blogs</li></Link>
        <Link href='contact'><li className={styles.navLink}>Contact</li></Link>
      </ul>
    </nav>
  );
}

export default Navbar;
