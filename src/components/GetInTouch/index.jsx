import CardsGetInTouch from '../CardsGetInTouch';
import Maintitle from '../Maintitle';
import {FaPaperPlane, FaPhone} from 'react-icons/fa';


const GetInTouch = () =>(
    <div className="pb-5">
        <Maintitle
        align="center"
        title="Get In Touch"
        text1="Problems trying to resolve the conflict between
        the two major realms of Classical physics: Newtonian mechanics"
        />
        <div className="row row-cols-1 row-cols-md-3 g-0 align-items-center justify-content-center">
          <div className="col col-lg-3">
            <CardsGetInTouch
              title="georgia.young@example.com"
              title2="georgia.young@ple.com"
              description="Get Support"
              icon={FaPhone}
              borderColor="#295C7A"
              textColor="295C7A"
            />
          </div>
          <div className="col col-lg-3">
            <CardsGetInTouch
              title="georgia.young@example.com"
              title2="georgia.young@ple.com"
              description="Get Support"
              icon={FaPaperPlane}
              backgroundColor="#295C7A"
              borderColor="white"
              textColor="white"
              topBottom="80px"
              StartEnd="40px"
            />
          </div>
          <div className="col col-lg-3">
            <CardsGetInTouch
              title="georgia.young@example.com"
              title2="georgia.young@ple.com"
              description="Get Support"
              icon={FaPhone}
              borderColor="#295C7A"
              textColor="295C7A"
            />
          </div>
        </div>
    </div>
)

export default GetInTouch
