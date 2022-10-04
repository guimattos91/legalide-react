
import { H3Title, ButtonRequest, TextWhite } from '../RequestAFreeConsultation/style.js';


const RequestAFreeConsultation = () =>(
    <div className="container py-5">
        <div className="p-4">
            <div className="row d-flex justify-content-between">
                <div className="col-10">
                    <H3Title> Request A Free Consultation Newsletter</H3Title>
                    <TextWhite>the quick fox jumps over the lazy dog</TextWhite>
                </div>
                <div className="col-2 d-flex align-items-center">
                    <div className="d-flex flex-end">
                        <ButtonRequest type="submit" className="px-4 py-2">Contact Us</ButtonRequest>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default RequestAFreeConsultation;