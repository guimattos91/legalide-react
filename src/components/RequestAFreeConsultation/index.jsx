
import { H3Title, ButtonRequest, TextWhite } from '../RequestAFreeConsultation/style.js';


const RequestAFreeConsultation = () =>(
    <div id="RequestAFreeConsultation">
        <div className="row d-flex justify-content-between pt-5">
            <div className="col-12 col-md-9 text-center text-md-start">
                <H3Title> Request A Free Consultation Newsletter</H3Title>
                <TextWhite>the quick fox jumps over the lazy dog</TextWhite>
            </div>
            <div className="col-12 col-md-3 d-flex align-items-center
            justify-content-md-end justify-content-center">
                <div className="d-flex text-center text-md-start">
                    <ButtonRequest type="submit" className="px-4 py-2 flex flex-nowrap">
                        Contact Us
                    </ButtonRequest>
                </div>
            </div>
        </div>
    </div>
);

export default RequestAFreeConsultation;
