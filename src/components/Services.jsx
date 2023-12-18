import React, { useRef } from "react";
import { motion, animate } from "framer-motion";
import { AiFillIeCircle, AiFillAndroid, AiFillWindows } from "react-icons/ai";
import { IoLogoChrome, } from "react-icons/io";
import { SiPlaywright } from "react-icons/si";
import { CgPerformance } from "react-icons/cg";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { MdCastForEducation } from "react-icons/md";
import { HiOutlineArrowPath } from "react-icons/hi2";
import Typewriter from "typewriter-effect";

const Services = () => {
  const animationProjectsCount = () => {
    animate(0, 8, {
      duration: 2,
      onUpdate: (v) => (projectsCount.current.textContent = v.toFixed())
    })
  }

  const animationYearsCount = () => {
    animate(0, 5, {
      duration: 2,
      onUpdate: (v) => (yearsCount.current.textContent = v.toFixed())
    })
  }

  const animationAutotestsCount = () => {
    animate(0, 1500, {
      duration: 2,
      onUpdate: (v) => (autotestsCount.current.textContent = v.toFixed())
    })
  }

  const projectsCount = useRef(null);
  const yearsCount = useRef(null);
  const autotestsCount = useRef(null);

  const animations = {
    whileInView: {
      x: 0,
      y: 0,
      opacity: 1
    },
    one: {
      opacity: 0,
      x: "-100%"
    },
    two: {
      opacity: 0,
      //x: "50%"
    }
  }

  return (
    <div id="services">
      <Typewriter options={{
          strings: ["Autotester", "Developer", "Lead"],
          autoStart: true,
          loop: true,
          cursor: "",
          wrapperClassName: "typewriterpara"
        }}
        />
      {/* <h2>Services</h2> */}
      <section>
        <motion.div
          className="serviceBox1"
          whileInView={animations.whileInView}
          initial={animations.one}
          transition={{
            delay: 0.5
          }}
        >
          <h3><motion.span whileInView={animationYearsCount} ref={yearsCount}></motion.span>+</h3>
          <p>years of commercial experience</p>
          <h3><motion.span whileInView={animationProjectsCount} ref={projectsCount}></motion.span>+</h3>
          <p>projects was in work</p>
          <h3><motion.span whileInView={animationAutotestsCount} ref={autotestsCount}></motion.span>+</h3>
          <p>autotests written</p>
        </motion.div>
        <motion.div
          className="serviceBox2"
          whileInView={animations.whileInView}
          initial={animations.two}
        >
          <IoLogoChrome />
          <span>Web Manual Testing</span>
        </motion.div>
        <motion.div
          className="serviceBox2"
          whileInView={animations.whileInView}
          initial={animations.two}
          transition={{
            delay: 0.1
          }}
        >
          <AiFillAndroid />
          <span>Mobile App Manual Testing</span>
        </motion.div>
        <motion.div
          className="serviceBox2"
          whileInView={animations.whileInView}
          initial={animations.two}
          transition={{
            delay: 0.2
          }}
        >
          <SiPlaywright />
          <span>Writing UI and API Autotests</span>
        </motion.div>
        <motion.div
          className="serviceBox2"
          whileInView={animations.whileInView}
          initial={animations.two}
          transition={{
            delay: 0.3
          }}
        >
          <CgPerformance />
          <span>Performance Testing</span>
        </motion.div>
        <motion.div
          className="serviceBox2"
          whileInView={animations.whileInView}
          initial={animations.two}
          transition={{
            delay: 0.4
          }}
        >
          <AiOutlineFundProjectionScreen />
          <span>QA Team Management</span>
        </motion.div>
        <motion.div
          className="serviceBox2"
          whileInView={animations.whileInView}
          initial={animations.two}
          transition={{
            delay: 0.5
          }}
        >
          <MdCastForEducation />
          <span>QA Learning</span>
        </motion.div>
        <motion.div
          className="serviceBox2"
          whileInView={animations.whileInView}
          initial={animations.two}
          transition={{
            delay: 0.6
          }}
        >
          <HiOutlineArrowPath />
          <span>QA CI/CD</span>
        </motion.div>
      </section>
    </div>
  );
};

export default Services;