import woman from '../../assets/agent.png';
import { BannerContainer, ListStyleNone, TitleH1Martel, BannerTitle, HeaderStyles } from '../Header/style.js';
import BannerButton from '../BannerButtons'
import '../Header/style.js';

const Header = () => (
    <BannerContainer>
        <HeaderStyles>
            <div className="d-flex justify-content-between container pt-3">
                <TitleH1Martel className="font-martel fontsizexg color-white">Legalide</TitleH1Martel>
                <nav>
                    <ListStyleNone className="d-flex align-items-center">
                        <li className="px-3 color-white">Practice areas</li>
                        <li className="px-3 color-white">Practice Advice</li>
                        <li className="px-3 color-white">Who we are</li>
                        <li className="px-3 color-white" >Contact</li>
                    </ListStyleNone>
                </nav>
            </div>
            <div className="container d-flex justify-content-between">
                <div className="d-flex align-items-center">
                    <div className="row">
                        <div className="col">
                            <BannerTitle>LEGAL PRO SERVICES</BannerTitle>
                            <div className="d-flex align-items-center">
                                <p>We know how large objects will act, but things on a small scale.</p>
                            </div>
                            <div className="d-flex">
                                <BannerButton title="Get Quote Now" />
                                <BannerButton title="Learn More" />
                            </div>
                        </div>
                    </div>
                    <div className= "col">
                        <div className="d-flex align-self-end">
                            <img src={woman} alt="woman" />
                        </div>
                    </div>
                </div>
            </div>
        </HeaderStyles>
    </BannerContainer>
);

export default Header;