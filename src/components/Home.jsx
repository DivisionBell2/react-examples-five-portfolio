import React, { useRef } from "react";
import { animate, motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import { BsArrowUpRight, BsChevronDown } from "react-icons/bs";
import me from "../assets/programming.png";

const Home = ({ ratio }) => {
    const animationClientsCount = () => {
        animate(0, 7, {
            duration: 3,
            onUpdate: (v) => (clientCount.current.textContent = v.toFixed())
        })
    }

    const animationProjectsCount = () => {
        animate(0, 1500, {
            duration: 3,
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
            <section className="home-image">
                <img src={me} alt="Munirov" />
            </section>
            <section className="home-text">
                <div>
                    <motion.h1 {...animations.h1}>
                        I am Alexandr Munirov
                    </motion.h1>
                    <Typewriter options={{
                        strings: ["Autotester", "Developer", "Lead"],
                        autoStart: true,
                        loop: true,
                        cursor: "",
                        wrapperClassName: "typewriterpara"
                    }}
                    />


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
                        <span>projects was in work</span>
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
                                        1500
                                    </motion.span>
                                )}
                            </p>
                            <span>autotests written</span>
                        </article>
                    </aside>
                    <div>
                        <a href="https://t.me/alexandrMunirov" target="_blank">my telegram</a>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Home;