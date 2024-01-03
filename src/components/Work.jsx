import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import data from "../assets/data.json";
import Typewriter from "typewriter-effect";
import { AiFillIeCircle, AiFillAndroid, AiFillWindows } from "react-icons/ai";
import { FaApple, FaJava } from "react-icons/fa";
import { IoLogoChrome, } from "react-icons/io";
import { SiPlaywright } from "react-icons/si";
import { CgPerformance } from "react-icons/cg";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { MdCastForEducation } from "react-icons/md";
import { HiOutlineArrowPath } from "react-icons/hi2";
import { GrFirefox } from "react-icons/gr";
import { HiOutlineMagnifyingGlass } from "react-icons/hi2";
import { IoLogoJavascript } from "react-icons/io5";
import { BiLogoTypescript, BiLogoPhp } from "react-icons/bi";
import { SiSelenium, SiKotlin, SiCodeceptjs, SiApachejmeter } from "react-icons/si";

const Work = () => {
    const data = [
        (<div className="workItem">
            <h3>Web Manual Testing</h3>
            <div className="workItemBody">
                <div>
                    <div className="primary">
                        <IoLogoChrome />
                        <GrFirefox />
                        <HiOutlineMagnifyingGlass />
                    </div>
                </div>

                <aside>
                    <p>Functional, non-functional, smoke, regression, acceptance and other types of web services manual testing</p>
                </aside>
            </div>
        </div>),
        (<div className="workItem">
            <h3>Mobile App Testing</h3>
            <div className="workItemBody">
                <div>
                    <div className="primary">
                        <AiFillAndroid />
                        <FaApple />
                    </div>
                </div>

                <aside>
                    <p>Functional, non-functional, smoke, regression, acceptance and other types of mobile manual testing with real devices (mobile farms, browserstack) and emulators (Android Studio)</p>
                </aside>
            </div>
        </div>),
        (<div className="workItem">
            <h3>Writing UI and API Autotests</h3>
            <div className="workItemBody">
                <div>
                    <div className="primary">
                        <FaJava />
                        <IoLogoJavascript />
                        <BiLogoTypescript />
                        <SiSelenium />
                        <SiPlaywright />
                    </div>
                    <div className="secondary">
                        <BiLogoPhp />
                        <SiKotlin />
                        <SiCodeceptjs />
                    </div>
                </div>

                <aside>
                    <p>Development of ui and api autotests in Java, JavaScript, Typescript, PHP using libraries and frameworks Selenium, Selenide, RestAssured, Codecept, CodeceptionJS, Gazzle, Jest, Playwright, WebdriverIO for web services of any complexity, including creating and deleting test data inside tests.</p>
                </aside>
            </div>
        </div>),
        (<div className="workItem">
            <h3>Performance Testing</h3>
            <div className="workItemBody">
                <div>
                    <div className="primary">
                        <SiApachejmeter />
                        <CgPerformance />
                    </div>
                </div>

                <aside>
                    <p>Smoke, Load, Stress, Spike and other types of performance testing with JMeter and K6</p>
                </aside>
            </div>
        </div>),
        (<div className="workItem">
            <h3>QA Team Management</h3>
            <div className="workItemBody">
                <div>
                    <div className="primary">
                        <IoLogoChrome />
                        <GrFirefox />
                        <HiOutlineMagnifyingGlass />
                    </div>
                    <div className="secondary">
                        <IoLogoChrome />
                        <GrFirefox />
                        <HiOutlineMagnifyingGlass />
                    </div>
                </div>

                <aside>
                    <p>Managing a team of testers on several projects, recruiting personnel, building processes</p>
                </aside>
            </div>
        </div>),
        (<div className="workItem">
            <h3>QA Learning</h3>
            <div className="workItemBody">
                <div>
                    <div className="primary">
                        <IoLogoChrome />
                        <GrFirefox />
                        <HiOutlineMagnifyingGlass />
                    </div>
                    <div className="secondary">
                        <IoLogoChrome />
                        <GrFirefox />
                        <HiOutlineMagnifyingGlass />
                    </div>
                </div>

                <aside>
                    <p>Author of the internal course of automatization on Java (Selenide) and Typescript (Playwright). Grew several manual testers into QA-automators. Experience training QA specialists in testing tools such as Postman and JMeter.</p>
                </aside>
            </div>
        </div>),
        (<div className="workItem">
            <h3>QA CI/CD</h3>
            <div className="workItemBody">
                <div>
                    <div className="primary">
                        <IoLogoChrome />
                        <GrFirefox />
                        <HiOutlineMagnifyingGlass />
                    </div>
                    <div className="secondary">
                        <IoLogoChrome />
                        <GrFirefox />
                        <HiOutlineMagnifyingGlass />
                    </div>
                </div>

                <aside>
                    <p>Setup and support of test stands (Docker). Management, support, and configuration of CI (Teamcity, Jenkins, GitlabCI). Creation of services for search and generating test data (Telegram, Web Services).</p>
                </aside>
            </div>
        </div>)
    ]
    return (
        <div id="work">
            <Typewriter options={{
                strings: ["Skills", "Tools"],
                autoStart: true,
                loop: true,
                cursor: "",
                wrapperClassName: "typewriterpara"
            }}
            />
            <section>
                <article>
                    <Carousel
                        showArrows={false}
                        showIndicators={true}
                        showStatus={false}
                        showThumbs={false}
                        interval={5000}
                        infiniteLoop={true}
                        autoPlay={true}
                    >
                        {
                            data.map(i => i)
                            // data.projects.map(i => (
                            //     <div key={i.title} className="workItem">
                            //         <IoLogoChrome />
                            //         <aside>
                            //             <h3>{i.title}</h3>
                            //             <p>{i.description}</p>
                            //         </aside>
                            //     </div>
                            // ))

                            // <div className="workItem">
                            //     <h3>Web Manual Testing</h3>
                            //     <div className="workItemBody">
                            //         <div>
                            //             <div className="primary">
                            //                 <IoLogoChrome />
                            //                 <GrFirefox />
                            //                 <HiOutlineMagnifyingGlass />
                            //             </div>
                            //             <div className="secondary">
                            //                 <IoLogoChrome />
                            //                 <GrFirefox />
                            //                 <HiOutlineMagnifyingGlass />
                            //             </div>
                            //         </div>

                            //         <aside>
                            //             <p>Functional, non-functional, smoke, regression, acceptance and other types of web services manual testing</p>
                            //         </aside>
                            //     </div>
                            // </div>
                        }
                    </Carousel>
                </article>
            </section>
        </div>
    )
}

export default Work;