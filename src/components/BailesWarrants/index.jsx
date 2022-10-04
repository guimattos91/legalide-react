import BailWarrants from '../../assets/BaileseWarrants.png';
import { FontPrimary, BgWhite, FontSecundary } from '../CardFraudsMislead/style.js';



const BailesWarrants = (props) => (
    <BgWhite>
        <FontPrimary className="p-3">Bailes &amp; Warrants</FontPrimary>
        <FontSecundary className="p-3"> “Quantum mechanics” is the description of the behaviour of matter</FontSecundary>
        <img src={BailWarrants} className="card-img-top  justify-content-end" alt="BailWarrants" />
    </BgWhite>
);

export default BailesWarrants