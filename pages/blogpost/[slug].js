import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import styles from '../../styles/BlogPost.module.css'
//Step 1: Find the file correponding to the slug
//Step 2: Populate them inside the page

function slug(props) {
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

export async function getServerSideProps(context) {
  // console.log(context.query)
  // const router = useRouter()
  const {slug} = (context.query)
  
  // if (!router.isReady) return;

  let data = await  fetch(`http://localhost:3000/api/getblog?slug=${slug}`)
    let myBlog = await data.json()

  return {
    props: { myBlog}, // will be passed to the page component as props
  }
}
export default slug