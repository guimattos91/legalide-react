import {AiOutlinePhone} from 'react-icons/ai';
import {FiMapPin} from 'react-icons/fi';
import {TbBrandTelegram} from 'react-icons/tb';
import FooterSocial from '../FooterSocial/index';
import { BackgroundColorSecundary, UlFooterStyle, FontMartelTitle } from '../Footer/style.js';

const Footer = () => (
    <>
        <BackgroundColorSecundary className="py-5">
            <div className="container">
                <div className="row row-cols-1 row-cols-md-5">
                    <div className="col pt-5 pt-md-0">
                        <nav className="d-flex justify-content-between">
                            <UlFooterStyle>
                                <FontMartelTitle className="pb-3"> Company Info </FontMartelTitle>
                                <li className="pb-1">About Us</li>
                                <li className="pb-1">Carrier</li>
                                <li className="pb-1">We are Hiring</li>
                                <li>Blog</li>
                            </UlFooterStyle>
                        </nav>
                    </div>
                    <div className="col pt-5 pt-md-0">
                        <nav className="d-flex justify-content-between">
                            <UlFooterStyle>
                                <FontMartelTitle className="pb-3"> Legal </FontMartelTitle>
                                <li className="pb-1">About Us</li>
                                <li className="pb-1">Carrier</li>
                                <li className="pb-1">We are Hiring</li>
                                <li>Blog</li>
                            </UlFooterStyle>
                        </nav>
                    </div>
                    <div className="col pt-5 pt-md-0">
                        <nav className="d-flex justify-content-between">
                            <UlFooterStyle>
                                <FontMartelTitle className="pb-3"> Features </FontMartelTitle>
                                <li className="pb-1">Business Marketing</li>
                                <li className="pb-1">User Analytic</li>
                                <li className="pb-1">Live Chat</li>
                                <li>Unlimited Support</li>
                            </UlFooterStyle>
                        </nav>
                    </div>
                    <div className="col pt-5 pt-md-0">
                        <nav className="d-flex justify-content-between">
                            <UlFooterStyle>
                                <FontMartelTitle className="pb-3"> Resources </FontMartelTitle>
                                <li className="pb-1">IOS &amp; Android</li>
                                <li className="pb-1">Watch a Demo</li>
                                <li className="pb-1">Customers</li>
                                <li>API</li>
                            </UlFooterStyle>
                                </nav>
                    </div>
                    <div className="col pt-5 pt-md-0">
                        <nav className="d-flex justify-content-between">
                            <UlFooterStyle>
                                <FontMartelTitle className="pb-3"> Get In Touch </FontMartelTitle>
                                <li className="pb-1"><AiOutlinePhone className='color-lightblue' /> 480 555-0103</li>
                                <li className="pb-1"><FiMapPin className='color-lightblue' /> 4517 Washington Ave.</li>
                                <li><TbBrandTelegram className='color-lightblue' /> debra.holt@example.com</li>
                            </UlFooterStyle>
                        </nav>
                    </div>
                </div>
            </div>
        </BackgroundColorSecundary>
        <FooterSocial />
    </>
);

export default Footer
