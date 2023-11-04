import React from "react";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import { BsArrowUpRight, BsChevronDown } from "react-icons/bs";
import me from "../assets/programming.png";

const Home2 = () => {
    const animations = {
        h1: {
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
                y: "-100%",
                opacity: 0
            },
            whileInView: {
                y: 0,
                opacity: 1
            }
        }
    }
    return (
        <div id="home">
            <section>
                <div>
                    <motion.h1 {...animations.h1}>
                        I am <br /> Alexandr Munirov
                    </motion.h1>
                    <Typewriter options={{
                        strings: ["Autotester", "Developer", "Lead"],
                        autoStart: true,
                        loop: true,
                        cursor: "",
                        wrapperClassName: "typewriterpara"
                    }}
                    />
                    <div>
                        <a href="mailto:neglavmag@gmail.com">Here is my email</a>
                        <a href="#work">Projects <BsArrowUpRight />{" "}</a>
                    </div>
                    <article>
                        <p>
                            +<span>1000</span>
                        </p>
                        <span>Autotests written</span>
                    </article>
                    <article>
                        <p>
                            <span>7</span>
                        </p>
                        <span>Projects covered by autotests</span>
                    </article>
                    <article data-special>
                        <p>Contact telegram</p>
                        <span>https://t.me/alexandrMunirov</span>
                    </article>
                </div>
            </section>
            <section>
                <img src={me} alt="Munirov" />
            </section>
            <BsChevronDown />
        </div>
    )
}

export default Home2;