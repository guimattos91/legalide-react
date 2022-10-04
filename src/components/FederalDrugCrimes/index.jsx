import FederalDrugs from '../../assets/FederalDrug.png';
import { FontPrimary, BgWhite, FontSecundary } from '../CardFraudsMislead/style.js';



const FederalDrugCrimes = (props) => (
    <BgWhite>
        <FontPrimary className="p-3">Federal Drug Crimes</FontPrimary>
        <FontSecundary className="p-3"> They describe a universe consisting of bodies moving</FontSecundary>
        <img src={FederalDrugs} className="card-img-top  justify-content-end" alt="BailWarrants" />
    </BgWhite>
);

export default FederalDrugCrimes