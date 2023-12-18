import React from "react";
import { AiOutlineMenu } from "react-icons/ai";

const Header = ({ menuOpen, setMenuOpen }) => {
    return (
        <>
            <nav>
                <NavContent setMenuOpen={setMenuOpen} />
            </nav>
            <button className="navBtn" onClick={() => setMenuOpen(!menuOpen)}>
                <AiOutlineMenu />
            </button>
        </>
    )
}

export const HeaderPhone = ({ menuOpen, setMenuOpen }) => {
    return (
        <div className={`navPhone ${menuOpen ? "navPhoneComes" : ""}`}>
            <NavContent setMenuOpen={setMenuOpen} />
        </div>
    )
}

export const NavContent = ({ setMenuOpen }) => (
    <>
        <h2>Munirov</h2>
        <div>
        <a onClick={() => setMenuOpen(false)} href="#services">Possibilities</a>
        <a onClick={() => setMenuOpen(false)} href="#timeline">Experience</a>
            <a onClick={() => setMenuOpen(false)} href="#work">Skills</a>
            <a onClick={() => setMenuOpen(false)} href="#contact">Contacts</a>
        </div>
        <a href="https://t.me/alexandrMunirov" target="_blank">
            <button>telegram</button>
        </a>
    </>
)

export default Header;