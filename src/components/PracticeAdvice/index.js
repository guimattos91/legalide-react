import Maintitle from '../Maintitle';
import BailesWarrants from '../BailesWarrants/index'
import FederalDrugCrimes from '../FederalDrugCrimes/index'
import TrafficRelatedCrimes from '../TrafficRelatedCrimes/index'
import CardFraudsMislead from '../CardFraudsMislead';


const PracticeAdvice = () =>(
    <div className="pb-5">
            <Maintitle
            title="Practice Advice"
            align="center"
            text1="Problems trying to resolve the conflict between
            the two major realms of Classical physics: Newtonian mechanics "
            />
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 d-flex justify-content-between g-4">
                <div className="col d-flex">
                  <CardFraudsMislead className="h-100" />
                </div>
                <div className="col d-flex">
                    <BailesWarrants className="h-100" />
                </div>
                <div className="col d-flex">
                    <FederalDrugCrimes className="h-100" />
                </div>
                <div className="col d-flex">
                    <TrafficRelatedCrimes className="h-100" />
                </div>
            </div>
    </div>
)

export default PracticeAdvice
