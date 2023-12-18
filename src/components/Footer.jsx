import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import data from "../assets/data.json";
import { AiFillGithub, AiFillInstagram, AiFillYoutube, AiOutlineArrowUp } from "react-icons/ai";

const Footer = () => {
    return (
        <footer>
            <div>
                <h2><a href="https://t.me/alexandrMunirov" target="_blank">Have a good day! - Alexandr Munirov</a></h2>
            </div>
        </footer>
    )
}

export default Footer;