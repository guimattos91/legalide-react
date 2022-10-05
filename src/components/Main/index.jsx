import Emailsubscribe from '../Emailsubscribe';
import OurPracticeArea from '../OurPracticeArea/';
import PracticeAdvice from '../PracticeAdvice/index.js';
import WhoWeAre from '../WhoWeAre/index';
import RequestAFreeConsultation from '../RequestAFreeConsultation/index';

const Main = () =>(
    <main>
        <div className="container py-5">
            <OurPracticeArea />
            <PracticeAdvice />
            <WhoWeAre />
            <Emailsubscribe />
            <RequestAFreeConsultation />
        </div>
    </main>
);

export default Main
