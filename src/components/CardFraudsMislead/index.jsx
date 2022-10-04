import cover from '../../assets/cover.png';
import { FontPrimary, BgWhite, FontSecundary } from '../CardFraudsMislead/style.js';



const Fraudsmislead = (props) => (

    <BgWhite>
        <FontPrimary className="p-3">Frauds or Mislead</FontPrimary>
        <FontSecundary className="p-3"> Newton thought that light was made up of particles, but then it was discovered </FontSecundary>
        <img src={cover} className="card-img-top  justify-content-end pt-4" alt="cover" />
    </BgWhite>

);

export default Fraudsmislead