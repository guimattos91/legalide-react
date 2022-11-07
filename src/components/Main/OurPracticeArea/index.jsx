import CardsOurPracticeAreas from './CardsOurPracticeAreas';
import Maintitle from '../../Maintitle';
import {FaGavel, FaFileContract, FaBalanceScale} from 'react-icons/fa';


const OurPracticeArea = () =>(
    <div id="OurPracticeArea"  className="pb-5">
        <Maintitle
        align="center"
        title="Our Practice Areas"
        text1="Problems trying to resolve the conflict between the two major
        realms of Classical physics: Newtonian mechanics"
        />
        <div className="row row-cols-1 row-cols-md-3">
          <div className="col d-flex  pt-5">
            <CardsOurPracticeAreas title="Family Law" icon={FaBalanceScale} />
          </div>
          <div className="col d-flex  pt-5">
             <CardsOurPracticeAreas title="Business Law" icon={FaGavel} />
          </div>
          <div className="col d-flex  pt-5">
             <CardsOurPracticeAreas title="Trust & Estates" icon={FaFileContract} />
          </div>
        </div>
    </div>
)

export default OurPracticeArea
