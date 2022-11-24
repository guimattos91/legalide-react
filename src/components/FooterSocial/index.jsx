import {FaFacebookSquare} from 'react-icons/fa';
import {FaInstagram} from 'react-icons/fa'
import {FaTwitter} from 'react-icons/fa'
import {FaYoutube} from 'react-icons/fa'
import { LinkStyled, SocialFooterStyle, TextLink, TextStyled, UlFooterSocial } from '../FooterSocial/style.js';



const FooterSocial = () => (
    <SocialFooterStyle className="d-flex container py-2">
        <div className="color-white d-flex flex-wrap">
            <TextStyled className="d-flex">Site by:
                <LinkStyled 
                href="https://www.linkedin.com/in/guimattos91/"
                target="_blank"
                rel="noreferrer">
                    <TextLink>Guilherme</TextLink>
                </LinkStyled>
            </TextStyled>
        </div>
        <nav>
            <UlFooterSocial className="d-flex align-items-center color-white">
                <li className="pe-2">
                    <a href="https://www.facebook.com/"
                    target="_blank"
                    rel="noreferrer">
                        <FaFacebookSquare color="white" size={25} />
                    </a>
                </li>
                <li className="pe-2">
                    <a href="https://www.instagram.com/"
                    target="_blank"
                    rel="noreferrer">
                        <FaInstagram color="white" size={25} />
                    </a>
                </li>
                <li className="pe-2">
                    <a href="https://twitter.com/"
                    target="_blank"
                    rel="noreferrer">
                        <FaTwitter color="white" size={25} />
                    </a>
                </li>
                <li>
                    <a href="https://www.youtube.com/"
                    target="_blank"
                    rel="noreferrer">
                        <FaYoutube color="white" size={25} />
                    </a>
                </li>
            </UlFooterSocial>
        </nav>
    </SocialFooterStyle>
);

export default FooterSocial
