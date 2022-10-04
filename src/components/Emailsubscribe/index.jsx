import hooli from '../../assets/hooliLogo.png';
import lyft from '../../assets/lyftLogo.png';
import hat from '../../assets/hatLogo.png';
import stripe from '../../assets/stripeLogo.png';
import aws from '../../assets/awsLogo.png';
import freepik from '../../assets/freepikLogo.png';
import { BackgroundBlue, H4Title, Buttoncolor, InputEmail } from '../Emailsubscribe/style.js';


const Emailsubscribe = () =>(
    <div className="container">
        <div className="d-flex justify-content-between align-items-center pb-5">
            <img src={hooli} alt="HooliLogo" />
            <img src={lyft} alt="LyftLogo" />
            <img src={hat} alt="HatLogo" />
            <img src={stripe} alt="StripeLogo" />
            <img src={aws} alt="AwsLogo" />
            <img src={freepik} alt="FreepikLogo" />
        </div>
        <BackgroundBlue className="p-4">
        <div className="d-flex justify-content-around align-items-center">
            <div className="px-2">
                <H4Title className="pl-5">Subscribe For Latest<br />Newsletter</H4Title>
            </div>
            <div className="px-2">
                <div className="d-flex">
                    <InputEmail type="email" id="exampleFormControlInput1" placeholder="Your Email"></InputEmail>
                    <Buttoncolor type="submit" className="p-2">Subscribe</Buttoncolor>
                </div>
            </div>
        </div>
        </BackgroundBlue>
    </div>
);

export default Emailsubscribe;