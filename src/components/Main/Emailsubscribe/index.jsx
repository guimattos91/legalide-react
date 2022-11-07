import hooli from '../../../assets/hooliLogo.png';
import lyft from '../../../assets/lyftLogo.png';
import hat from '../../../assets/hatLogo.png';
import stripe from '../../../assets/stripeLogo.png';
import aws from '../../../assets/awsLogo.png';
import freepik from '../../../assets/freepikLogo.png';
import { BackgroundBlue, H4Title, Buttoncolor, InputEmail } from '../Emailsubscribe/style.js';


const Emailsubscribe = () =>(
    <>
        <div className="row row-cols-1 row-cols-md-3 row-cols-lg-6 py-5
        d-flex justify-content-between g-3">
            <div className="col d-flex align-items-center justify-content-center
            pt-4 pt-md-0">
                <img src={hooli} alt="HooliLogo"
                    className="text-center" />
            </div>
            <div className="col d-flex align-items-center justify-content-center
            pt-4 pt-md-0">
                <img src={lyft} alt="LyftLogo"
                className="text-center"/>
            </div>
            <div className="col d-flex align-items-center justify-content-center
            pt-4 pt-md-0">
                <img src={hat} alt="HatLogo"
                className="text-center"/>
            </div>
            <div className="col d-flex align-items-center justify-content-center
            pt-4 pt-md-0">
                <img src={stripe} alt="StripeLogo"
                className="text-center"/>
            </div>
            <div className="col d-flex align-items-center justify-content-center
            pt-4 pt-md-0">
                <img src={aws} alt="AwsLogo"
                className="text-center"/>
            </div>
            <div className="col d-flex align-items-center justify-content-center
            pt-4 pt-md-0">
                <img src={freepik} alt="FreepikLogo"
                className="text-center"/>
            </div>
        </div>
        <BackgroundBlue className="row row-cols-1 row-cols-md-2 p-4 align-items-center">
            <div className="col col-md-4">
                    <div className="px-2">
                        <H4Title className="text-center text-md-start">
                            Subscribe For Latest Newsletter
                        </H4Title>
                    </div>
            </div>
            <div className= "col col-md-8">
                <div className="d-flex w-100">
                    <InputEmail type="email" id="exampleFormControlInput1" placeholder="Your Email"></InputEmail>
                    <Buttoncolor type="submit" className="p-2">Subscribe</Buttoncolor>
                </div>
            </div>
        </BackgroundBlue>
    </>
);

export default Emailsubscribe;
