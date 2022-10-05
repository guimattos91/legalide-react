import FraudsOrMisleads from '../../assets/FraudsOrMisleads.png';
import { FontPrimary, BgWhite, FontSecundary } from '../CardFraudsMislead/style.js';



const CardFraudsMislead = (props) => (

    <BgWhite>
        <FontPrimary className="p-3">Frauds or Mislead</FontPrimary>
        <FontSecundary className="p-3"> Newton thought that light was made up of particles, but then it was discovered </FontSecundary>
        <img src={FraudsOrMisleads} className="card-img-top  justify-content-end pt-4" alt="cover" />
    </BgWhite>

);

export default CardFraudsMislead
