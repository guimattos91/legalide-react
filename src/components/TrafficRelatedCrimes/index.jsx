import TrafficRelated from '../../assets/TrafficRelated.png';
import { FontPrimary, BgWhite, FontSecundary } from '../CardFraudsMislead/style.js';



const TrafficRelatedCrimes = (props) => (
    <BgWhite>
        <FontPrimary className="p-3">Traffic Related Crimes</FontPrimary>
        <FontSecundary className="p-3"> They finally obtained a consistent description of the behaviour </FontSecundary>
        <img src={TrafficRelated} className="card-img-top  justify-content-end" alt="BailWarrants" />
    </BgWhite>
);

export default TrafficRelatedCrimes