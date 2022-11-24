import { BannerTitle, Container } from './style';
import { IoClose } from 'react-icons/io5';
import { useEffect } from 'react';


const MenuComponent = ({ menuIsVisible, setMenuIsVisible }) => {
    useEffect(() => {
        document.body.style.overflowY = menuIsVisible ? 'hidden' : 'auto';
    }, [menuIsVisible]);

    return (
    <>
        <Container
        isVisible={menuIsVisible}
        onClick={() => setMenuIsVisible(false)}>
            <div>
                    <IoClose size={45} onClick={() => setMenuIsVisible(false)} />
                    <BannerTitle>Menu</BannerTitle>
                    <nav>
                            <a
                            href="#OurPracticeArea"
                            onClick={() => setMenuIsVisible(false)}>
                                Practice Areas
                            </a>
                            <a
                            href="#PracticeAdvice"
                            onClick={() => setMenuIsVisible(false)}>
                                Practice Advice
                            </a>
                            <a
                            href="#WhoWeAre"
                            onClick={() => setMenuIsVisible(false)}>
                                Who we are
                            </a>
                            <a
                            href="#RequestAFreeConsultation"
                            onClick={() => setMenuIsVisible(false)}>
                                Contact
                            </a>
                    </nav>
            </div>
        </Container>
    </>
)};

export default MenuComponent;
