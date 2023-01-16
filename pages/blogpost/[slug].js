import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import styles from '../../styles/BlogPost.module.css'
import * as fs from "fs";
//Step 1: Find the file correponding to the slug
//Step 2: Populate them inside the page

function Slug(props) {
  const [blog, setBlog] = useState(props.myBlog)
    
  return (
    <div className={styles.container}>
      <main className={styles.main}>

      <h1>{blog && blog.title}</h1>
      <hr className={styles.bottomhr}/>
      <div>
        {blog && blog.content}
      </div>
      </main>
      </div>
  )
}

export async function getStaticPaths() {
  return {
    paths: [
      { params: {slug:"how-to-learn-flask"} }, // See the "paths" section below
      { params: {slug:"how-to-learn-django"} },
      { params: {slug:"how-to-learn-js"} },
      { params: {slug:"how-to-learn-nextjs"} },
    ],
    fallback: true, //false or "blocking" // See the "fallback" section below
  };
}



export async function getStaticProps(context) {
 console.log(context)
  const {slug} = (context.params)
  
  // if (!router.isReady) return;

 let myBlog =await  fs.promises.readFile(`blogdata/${slug}.json`, "utf-8")

  return {
    props: { myBlog:JSON.parse(myBlog)}, // will be passed to the page component as props
  }
}
export default Slug