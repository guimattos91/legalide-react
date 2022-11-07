import {FaFacebookSquare} from 'react-icons/fa';
import {FaInstagram} from 'react-icons/fa'
import {FaTwitter} from 'react-icons/fa'
import {FaYoutube} from 'react-icons/fa'
import { LinkStyled, TextStyled, UlFooterSocial } from '../FooterSocial/style.js';



const FooterSocial = () => (
    <div className="d-flex justify-content-between container">
        <div className="color-white d-flex flex-wrap">
            <TextStyled>Site by
                <LinkStyled href="https://www.linkedin.com/in/guimattos91/" target="_blank" rel="noreferrer">
                    Guilherme
                </LinkStyled>
            </TextStyled>
            <TextStyled><i>All Rights Reserved</i></TextStyled>
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
