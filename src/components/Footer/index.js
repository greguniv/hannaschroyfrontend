import { SiTiktok, SiKofi, SiTwitter, SiInstagram, SiYoutube } from "react-icons/si";
import { FaEtsy } from "react-icons/fa";
import './styles.css'

const Footer = () => {
    return (
        <footer>
            <div className="about-footer-text">
                <h4>
                    Hanna Schroy
                </h4>
            </div>
            <div className="email-contact-text">
                <p>CONTACT | hannaschroy@gmail.com</p>
            </div>
            <div className="social-media">
                <div>Find Me Here:</div>
                <div className="socmed-links">
                    <a href="https://www.instagram.com/elefluff/"><SiInstagram /></a>
                    <a href="https://www.youtube.com/elefluff"><SiYoutube /></a>
                    <a href="https://ko-fi.com/elefluff"><SiKofi /></a>
                    <a href="https://www.etsy.com/shop/elefluff/"><FaEtsy /></a>
                    <a href="https://twitter.com/elefluff"><SiTwitter /></a>
                    <a href="https://www.tiktok.com/@elefluff"><SiTiktok /></a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
