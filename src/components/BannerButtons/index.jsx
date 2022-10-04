import { ButtonBanner } from './style.js';

const BannerButton = (props) =>(
    <ButtonBanner className="d-flex align-items-center">
        <p className="d-flex justify-content-center align-self-center">{props.title}</p>
    </ButtonBanner>

)

export default BannerButton;