import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import styles from "../../styles/BlogPost.module.css";
import * as fs from "fs";
//Step 1: Find the file correponding to the slug
//Step 2: Populate them inside the page

function Slug(props) {
  function createMarkup(content){
    return {__html:content}
  }
  const [blog, setBlog] = useState(props.myBlog);

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1>{blog && blog.title}</h1>
        <hr className={styles.bottomhr} />
        {blog && <div dangerouslySetInnerHTML={createMarkup(blog.content)}></div>}
      </main>
    </div>
  );
}

export async function getStaticPaths() {
  let allb = await fs.promises.readdir(`blogdata`)
  allb = allb.map((item)=>{
    return { params: { slug: item.split(".")[0]} }
  })
  console.log(allb)
  return {
    paths: allb,
    fallback: true // false or 'blocking'
  };
}

export async function getStaticProps(context) {
  // console.log(context);
  const { slug } = context.params;

  // if (!router.isReady) return;

  let myBlog = await fs.promises.readFile(`blogdata/${slug}.json`, "utf-8");

  return {
    props: { myBlog: JSON.parse(myBlog) }, // will be passed to the page component as props
  };
}
export default Slug;
