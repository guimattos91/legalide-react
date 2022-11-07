import Emailsubscribe from './Emailsubscribe';
import OurPracticeArea from './OurPracticeArea/';
import PracticeAdvice from './PracticeAdvice/index';
import WhoWeAre from './WhoWeAre/index';
import RequestAFreeConsultation from './RequestAFreeConsultation/index';
import GetInTouch from './GetInTouch';

const Main = () =>(
    <main>
        <div className="container py-5">
            <OurPracticeArea />
            <PracticeAdvice />
            <WhoWeAre />
            <Emailsubscribe />
            <GetInTouch />
            <RequestAFreeConsultation />
        </div>
    </main>
);

export default Main
