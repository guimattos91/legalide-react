import {FaFacebookSquare} from 'react-icons/fa';
import {FaInstagram} from 'react-icons/fa'
import {FaTwitter} from 'react-icons/fa'
import {FaYoutube} from 'react-icons/fa'
import { LinkStyled, TextStyled, UlFooterSocial } from '../FooterSocial/style.js';



const FooterSocial = () => (
    <div className="d-flex justify-content-between align-items-center container">
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
                <li className="px-1">
                    <a href="https://www.facebook.com/">
                        <FaFacebookSquare color="white" />
                    </a>
                </li>
                <li className="px-1">
                    <a href="https://www.instagram.com//">
                        <FaInstagram color="white" />
                    </a>
                </li>
                <li className="px-1">
                    <a href="https://twitter.com/home/">
                        <FaTwitter color="white" />
                    </a>
                </li>
                <li>
                    <a href="https://www.youtube.com/">
                        <FaYoutube color="white" />
                    </a>
                </li>
            </UlFooterSocial>
        </nav>
    </div>
);

export default FooterSocial
