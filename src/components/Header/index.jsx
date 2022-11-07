import woman from '../../assets/agent.png';
import {
    BannerContainer,
    ListStyleNone,
    TitleH1Martel,
    BannerTitle,
    HeaderStyles,
    TransparentButtonBanner,
    YellowButtonBanner,
    OffCanvasBody,
    ListStyleNoneMobile
} from '../Header/style.js';
import '../Header/style.js';
import { BiCart, BiMenuAltRight, BiSearch } from 'react-icons/bi';
import { LinkStyle } from '../../styles/global';


const Header = () => (
    <BannerContainer>
        <HeaderStyles>
            <div className="d-flex justify-content-between container pt-3">
                <TitleH1Martel className="fontsizexg text-center text-md-start">Legalide</TitleH1Martel>
                <nav className="d-none d-md-flex">
                    <ListStyleNone className="d-flex align-items-center">
                        <LinkStyle href="#OurPracticeArea"><li className="px-3 color-white">Practice Areas</li></LinkStyle>
                        <LinkStyle href="#PracticeAdvice"><li className="px-3 color-white">Practice Advice</li></LinkStyle>
                        <LinkStyle href="#WhoWeAre"><li className="px-3 color-white">Who we are</li></LinkStyle>
                        <LinkStyle href="#RequestAFreeConsultation"><li className="px-3 color-white" >Contact</li></LinkStyle>
                    </ListStyleNone>
                </nav>
                <nav className="d-flex d-md-none">
                    <ListStyleNone className="d-flex align-items-center">
                        <li className="px-3 color-white"><BiSearch /></li>
                        <li className="px-3 color-white"><BiCart /></li>
                        <button className="btn border-0"
                            type="button"
                            data-bs-toggle="offcanvas"
                            data-bs-target="#offcanvasScrolling"
                            aria-controls="offcanvasScrolling">
                            <li className="px-3 color-white">
                                <BiMenuAltRight />
                            </li>
                        </button>
                    </ListStyleNone>

                    <div className="offcanvas offcanvas-start"
                        data-bs-scroll="true"
                        data-bs-backdrop="false"
                        tabindex="-1"
                        id="offcanvasScrolling"
                        aria-labelledby="offcanvasScrollingLabel">
                        <OffCanvasBody className="offcanvas-header">
                            <BannerTitle className="offcanvas-title" id="offcanvasScrollingLabel">Menu</BannerTitle>
                            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close">
                            </button>
                        </OffCanvasBody>
                        <OffCanvasBody className="offcanvas-body">
                        <nav >
                            <ListStyleNoneMobile className="d-flex flex-column align-items-center">
                                    <li className="py-3 color-white" data-bs-dismiss="offcanvas">
                                        <LinkStyle href="#OurPracticeArea">
                                            Practice Areas
                                        </LinkStyle>
                                    </li>
                                <LinkStyle href="#PracticeAdvice" ><li className="py-3 color-white" data-bs-dismiss="offcanvas">Practice Advice</li></LinkStyle>
                                <LinkStyle href="#WhoWeAre"><li className="py-3 color-white">Who we are</li></LinkStyle>
                                <LinkStyle href="#RequestAFreeConsultation"><li className="py-3 color-white" >Contact</li></LinkStyle>
                            </ListStyleNoneMobile>
                        </nav>                        </OffCanvasBody>
                        </div>
                </nav>
            </div>
            <div className="container d-flex justify-content-between">
                    <div className="row row-cols-1 row-cols-md-2">
                        <div className="col align-self-center">
                            <div className="d-flex flex-column">
                                <BannerTitle className="text-center text-md-start pt-4 pt-md-0">
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
                        <div className= "col">
                            <div className="d-flex align-self-end">
                                <img src={woman} alt="woman" className="img-fluid pt-4 pt-md-0" />
                            </div>
                        </div>
                    </div>
            </div>
        </HeaderStyles>
    </BannerContainer>
);

export default Header;
