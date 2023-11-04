import React, { useRef } from "react";
import { animate, motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import { BsArrowUpRight, BsChevronDown } from "react-icons/bs";
import me from "../assets/logo.png";

const Home = ({ ratio }) => {
    const animationClientsCount = () => {
        animate(0, 100, {
            duration: 1,
            onUpdate: (v) => (clientCount.current.textContent = v.toFixed())
        })
    }

    const animationProjectsCount = () => {
        animate(0, 500, {
            duration: 1,
            onUpdate: (v) => (projectCount.current.textContent = v.toFixed())
        })
    }

    const clientCount = useRef(null);
    const projectCount = useRef(null);
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
                            +
                            {ratio < 2 && (
                                <motion.span
                                    whileInView={animationClientsCount}
                                    ref={clientCount}
                                ></motion.span>
                            )}
                        </p>
                        <span>Clients Worldwide</span>
                    </article>

                    <aside>
                        <article>
                            <p>
                                +
                                {ratio < 2 && (
                                    <motion.span
                                        ref={projectCount}
                                        whileInView={animationProjectsCount}
                                    >
                                        500
                                    </motion.span>
                                )}
                            </p>
                            <span>Projects Done</span>
                        </article>
                        <article data-special>
                            <p>Contact telegram</p>
                            <span>https://t.me/alexandrMunirov</span>
                        </article>
                    </aside>
                </div>
            </section>
            <section>
                <img src={me} alt="Munirov" />
            </section>
            <BsChevronDown />
        </div>
    )
}

export default Home;