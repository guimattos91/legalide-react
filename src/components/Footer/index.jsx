import {AiOutlinePhone} from 'react-icons/ai';
import {FiMapPin} from 'react-icons/fi';
import {TbBrandTelegram} from 'react-icons/tb';
import FooterSocial from '../FooterSocial/index';
import { BackgroundColorSecundary, UlFooterStyle, FontMartelTitle } from '../Footer/style.js';

const Footer = () => (
    <>
        <BackgroundColorSecundary className="py-5">
                <nav className="d-flex justify-content-between container">
                    <UlFooterStyle>
                        <FontMartelTitle className="pb-3"> Company Info </FontMartelTitle>
                        <li className="pb-1">About Us</li>
                        <li className="pb-1">Carrier</li>
                        <li className="pb-1">We are Hiring</li>
                        <li>Blog</li>
                    </UlFooterStyle>
                    <UlFooterStyle>
                        <FontMartelTitle className="pb-3"> Legal </FontMartelTitle>
                        <li className="pb-1">About Us</li>
                        <li className="pb-1">Carrier</li>
                        <li className="pb-1">We are Hiring</li>
                        <li>Blog</li>
                    </UlFooterStyle>
                    <UlFooterStyle>
                        <FontMartelTitle className="pb-3"> Features </FontMartelTitle>
                        <li className="pb-1">Business Marketing</li>
                        <li className="pb-1">User Analytic</li>
                        <li className="pb-1">Live Chat</li>
                        <li>Unlimited Support</li>
                    </UlFooterStyle>
                    <UlFooterStyle>
                        <FontMartelTitle className="pb-3"> Resources </FontMartelTitle>
                        <li className="pb-1">IOS &amp; Android</li>
                        <li className="pb-1">Watch a Demo</li>
                        <li className="pb-1">Customers</li>
                        <li>API</li>
                    </UlFooterStyle>
                    <UlFooterStyle>
                        <FontMartelTitle className="pb-3"> Get In Touch </FontMartelTitle>
                        <li className="pb-1"><AiOutlinePhone className='color-lightblue' /> 480 555-0103</li>
                        <li className="pb-1"><FiMapPin className='color-lightblue' /> 4517 Washington Ave.</li>
                        <li><TbBrandTelegram className='color-lightblue' /> debra.holt@example.com</li>
                    </UlFooterStyle>
                </nav>
        </BackgroundColorSecundary>
        <FooterSocial />
    </>
);

export default Footer