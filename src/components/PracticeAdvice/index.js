import Fraudsmislead from '../CardFraudsMislead/index'
import Maintitle from '../Maintitle';
import BailesWarrants from '../BailesWarrants/index'
import FederalDrugCrimes from '../FederalDrugCrimes/index'
import TrafficRelatedCrimes from '../TrafficRelatedCrimes/index'


const PracticeAdvice = () =>(
    <div className="container py-5">
            <Maintitle
            title="Practice Advice"
            align="center"
            text1="Problems trying to resolve the conflict between
            the two major realms of Classical physics: Newtonian mechanics "
            />
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 d-flex justify-content-center g-5">
                <div className="col">
                    <Fraudsmislead />
                </div>
                <div className="col">
                    <BailesWarrants />
                </div>
                <div className="col">
                    <FederalDrugCrimes />
                </div>
                <div className="col">
                    <TrafficRelatedCrimes />
                </div>
            </div>
    </div>
)

export default PracticeAdvice