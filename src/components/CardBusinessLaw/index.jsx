import {GiScales} from 'react-icons/gi';
import { FontPrimary,CardWhite } from '../CardBusinessLaw/style';


const BusinessLaw = (props) => {
    <>
        <CardWhite>
            <GiScales />
            <FontPrimary>{props.title}</FontPrimary>
        </CardWhite>
    </>
}

export default BusinessLaw;