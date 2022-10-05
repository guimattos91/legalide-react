import BailWarrants from '../../assets/BaileseWarrants.png';
import { FontPrimary, BgWhite, FontSecundary } from '../CardFraudsMislead/style.js';



const BailesWarrants = (props) => (
    <BgWhite className="pt-2">
        <FontPrimary className="p-3">Bailes Warrants</FontPrimary>
        <FontSecundary className="p-3"> “Quantum mechanics” is the description of the behaviour of matter</FontSecundary>
        <img src={BailWarrants} className="card-img-bottom w-100" alt="BailWarrants" />
    </BgWhite>
);

export default BailesWarrants
