import React, { useState } from "react";
import toast from "react-hot-toast";
import { motion } from "framer-motion";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebase";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [disableBtn, setDisableBtn] = useState(false);

  const submitHandler = async (e) => {
    e.preventDefault();
    setDisableBtn(true);

    try {
      await addDoc(collection(db, "contacts"), {
        name, email, message
      });
      setName("");
      setEmail("");
      setMessage("");
      toast.success("Message Sent");
      setDisableBtn(false);
    } catch (error) {
      toast.error("Error");
      console.log(error);
      setDisableBtn(false);
    }
  }

  const animations = {
    a: {
      initial: {
        x: "-100%",
        opacity: 0
      },
      whileInView: {
        x: 0,
        opacity: 1
      }
    },
    h2: {
      initial: {
        x: "-100%",
        opacity: 0
      },
      whileInView: {
        x: 0,
        opacity: 1
      }
    },
    form: {
      initial: {
        x: "-100%",
        opacity: 0
      },
      whileInView: {
        x: 0,
        opacity: 1
      }
    },
    button: {
      initial: {
        x: "-100%",
        opacity: 0
      },
      whileInView: {
        x: 0,
        opacity: 1
      },
      transition: {
        delay: 0.5
      }
    }
  }

  return (
    <div id="contact">
      <motion.form
        onSubmit={submitHandler}
        {...animations.form}
      >
        <h2>Contact Me</h2>
        <motion.a href="https://t.me/alexandrMunirov" target="_blank">Write to telegram</motion.a>
        <motion.h2>OR</motion.h2>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Your Name"
          required
          name="name"
        />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Your Email"
          required
          name="email"
        />
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Your message"
          required
          name="message"
        />
        <motion.button
          disabled={disableBtn}
          {...animations.button}
          className={disableBtn ? "disableBtn" : ""}
          type="submit"
        >Send</motion.button>
      </motion.form>
    </div>
  );
};

export default Contact;