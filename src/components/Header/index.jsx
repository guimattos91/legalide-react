import woman from '../../assets/agent.png';
import {
    BannerContainer,
    ListStyleNone,
    TitleH1Martel,
    BannerTitle,
    HeaderStyles,
    TransparentButtonBanner,
    YellowButtonBanner,
} from '../Header/style.js';
import '../Header/style.js';
import {  BiMenuAltRight } from 'react-icons/bi';
import { LinkStyle } from '../../styles/global';
import MenuComponent from '../MenuComponent/MenuComponent';
import { useState } from 'react';


const Header = () => {
    const [menuIsVisible, setMenuIsVisible] = useState(false)
    return (
        <BannerContainer>
            <HeaderStyles>
                <div className="container d-flex justify-content-between pt-3 align-items-center">
                    <TitleH1Martel className="fontsizexg text-center text-md-start">Legalide</TitleH1Martel>
                    <nav className="d-none d-md-flex">
                        <ListStyleNone className="d-flex align-items-center">
                            <li className="px-3 color-white"><LinkStyle href="#OurPracticeArea">Practice Areas</LinkStyle></li>
                            <li className="px-3 color-white"><LinkStyle href="#PracticeAdvice">Practice Advice</LinkStyle></li>
                        <li className="px-3 color-white"> <LinkStyle href="#WhoWeAre">Who we are</LinkStyle></li>
                            <li className="px-3 color-white" ><LinkStyle href="#RequestAFreeConsultation">Contact</LinkStyle></li>
                        </ListStyleNone>
                    </nav>
                    <MenuComponent
                        menuIsVisible={menuIsVisible}
                        setMenuIsVisible={setMenuIsVisible}
                    />
                    <button
                    className="btn border-0 d-flex d-md-none m-0 p-0"
                    type="button"
                    onClick={() => setMenuIsVisible(true)}>
                        <BiMenuAltRight color="white" size={30}  />
                    </button>

                </div>
                <div className="container">
                        <div className="row row-cols-1 row-cols-md-2 d-flex justify-content-center">
                            <div className="col align-self-center">
                                <div className="d-flex flex-column">
                                    <BannerTitle className="text-center text-md-start">
                                        LEGAL PRO SERVICES
                                    </BannerTitle>
                                    <div className="d-flex align-items-center">
                                        <p className="text-center text-md-start">
                                            We know how large objects will act, but things on a small scale.
                                        </p>
                                    </div>
                                    <div className="d-flex justify-content-center justify-content-md-start flex-wrap">
                                        <YellowButtonBanner className="mt-4 mt-lg-0">Get Quote Now</YellowButtonBanner>
                                        <TransparentButtonBanner className="mt-4 mt-lg-0">Learn More</TransparentButtonBanner>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                    <img src={woman} alt="woman" className="img-fluid pt-4 pt-md-0" />
                            </div>
                        </div>
                </div>
            </HeaderStyles>
        </BannerContainer>
    )};

export default Header;
