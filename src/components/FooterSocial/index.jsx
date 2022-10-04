import {GiBrain} from 'react-icons/gi';
import {FaFacebookSquare} from 'react-icons/fa';
import {FaInstagram} from 'react-icons/fa'
import {FaTwitter} from 'react-icons/fa'
import {FaYoutube} from 'react-icons/fa'
import { UlFooterSocial } from '../FooterSocial/style.js';



const FooterSocial = () => (
    <div className="d-flex justify-content-between container">
        <div className="color-white">
            <p>Made With <GiBrain /> By Guilherme <i>All Rights Reserved</i></p>
        </div>
        <nav>
            <UlFooterSocial className="d-flex align-items-center color-white">
                <a href="https://www.facebook.com/"><li className="px-1"> <FaFacebookSquare /> </li></a>
                <a href="https://www.instagram.com//"><li className="px-1"> <FaInstagram />  </li></a>
                <a href="https://twitter.com/home/"><li className="px-1"> <FaTwitter /> </li></a>
                <a href="https://www.youtube.com/"><li> <FaYoutube /> </li></a>
            </UlFooterSocial>
        </nav>
    </div>
);

export default FooterSocial