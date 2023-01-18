import React from 'react'
import styles from '../styles/About.module.css'
function About() {
  return (
    <div className={styles.container}>
      <h1 className={`${styles["heading"]} ${styles["mt-15"]}`}>About Hunting Coders</h1>
      <h2 className={`${styles["mt-15"]}`}>Introduction</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem aut ex recusandae, harum soluta quod velit. Rerum officia minima nobis odit nemo natus provident suscipit! Iure pariatur fuga obcaecati quos.
      Obcaecati est facilis eos officiis magnam dolor possimus quam, fugit hic ab, similique voluptates consequatur eligendi exercitationem libero vero reprehenderit voluptate, sed totam illum laboriosam non rem quo. Cupiditate, qui!
      Aut saepe amet consequatur aliquid facere.
      </p>
      <h2 className={`${styles["mt-15"]}`}>Servises offered</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat eligendi reiciendis quod ipsum voluptate minima, expedita enim ratione iure impedit totam amet nostrum dolorem voluptatum quas optio. Nostrum, laboriosam architecto.
      Et, consequatur! Facilis quos repellendus, ipsam minima similique quasi libero fugiat a labore quaerat incidunt animi numquam eius cupiditate, accusamus eveniet laudantium eum possimus corporis! Expedita ducimus ipsum doloremque earum?</p>
      <ul className={`${styles["mt-15"]}`}>
        <h4 className={`${styles["mt-15"]}`}>Our Servises</h4>
        <li>Service 1</li>
        <li>Service 2</li>
        <li>Service 3</li>
      </ul>
      <h2 className={`${styles["mt-15"]}`}>Contact us</h2>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus, iure odit officia voluptate sint consequatur eos fuga ipsum repellat aliquam dolorum facilis repudiandae labore iste modi laborum beatae illum maxime!</p>
    </div>
  )
}

export default About