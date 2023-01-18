import React, { useState } from "react";
import styles from "../styles/Contact.module.css";
function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [desc, setDesc] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log({"name":name,"email":email,"phone":phone,"desc":desc})
    //POST Data
    const data ={name,email,phone,desc}
    fetch('http://localhost:3000/api/postcontact/', {
  method: 'POST', // or 'PUT'
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(data),
})
  .then((response) => response.json())
  .then((data) => {
    console.log('Success:', data);
    alert('Thanks for contacting us')
    setName('')
    setEmail('')
    setPhone('')
    setDesc('')
  })
  .catch((error) => {
    console.error('Error:', error);
  });
  };
  const handleChange = (e) => {
    if (e.target.name == "name") {
      setName(e.target.value);
    } else if (e.target.name == "email") {
      setEmail(e.target.value);
    } else if (e.target.name == "phone") {
      setPhone(e.target.value);
    } else if (e.target.name == "desc") {
      setDesc(e.target.value);
    }
    // console.log(e, "Change")
  };
  return (
    <div className={styles.main}>
      <h1>Contact</h1>
      {/* <div className={styles.container}> */}
      <form
        action=""
        method="post"
        className={styles.container}
        onSubmit={handleSubmit}
      >
        <input
          className={styles.input}
          type="text"
          name="name"
          id="name"
          placeholder="Enter your name"
          autoComplete="off"
          value={name}
          onChange={handleChange}
          required
        />

        <input
          className={styles.input}
          type="email"
          name="email"
          id="email"
          placeholder="Enter your email"
          autoComplete="off"
          value={email}
          onChange={handleChange}
          required
        />

        <input
          className={styles.input}
          type="number"
          name="phone"
          id="phone"
          placeholder="Enter your phone number"
          
          maxLength="10"
          value={phone}
          onChange={handleChange}
          required
        />
        <textarea
          className={styles.message}
          name="desc"
          id="desc"
          cols="30"
          rows="10"
          placeholder="Enter your message"
          onChange={handleChange}
          value={desc}
          required
        ></textarea>
        <button type="submit" className={styles.btn}>
          Submit
        </button>
      </form>
    </div>
    // </div>
  );
}

export default Contact;
