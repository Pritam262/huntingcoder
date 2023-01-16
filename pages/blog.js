import React, { useEffect, useState } from "react";

// import styles from '../styles/Home.module.css'
import Link from "next/link";
import styles from "../styles/Blog.module.css";

// Step 1: Collect all the data from blogdata directory
//Step 2: Iterate through the and display them
//Step 3:
const Blog=(props) =>{
  console.log(props)
  const [blogs, setBlogs] = useState(props.allBlogs);
  // useEffect(() => {
   
  // }, []);

  return (
    <>
      <div className={styles.blogs} >
        {blogs.map((item) => {
          console.log(item);
          return (
            <div className={styles.blogItem} key={item.slug}>
              <Link href={`/blogpost/${item.slug}`}>
                <h2 className={styles.heading2}>{item.title}</h2>
                <p>
                  {item.content.slice(0, 140)}.... <button>Read more</button>
                </p>
              </Link>
            </div>
          );
        })}
        </div>
    </>
  );
}

export async function getServerSideProps(context) {
  // console.log("useEffect is running");
 let data =await   fetch(`http://localhost:3000/api/blogs`)
 let allBlogs = await data.json()

  return {
    props: {allBlogs}, // will be passed to the page component as props
  }
}
export default Blog;
