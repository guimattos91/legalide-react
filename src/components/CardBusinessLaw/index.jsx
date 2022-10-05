import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {GiScales} from 'react-icons/gi';
import { CardWhite, FontPrimary } from '../CardBusinessLaw/style';


const CardBusinessLaw = ({title, imagename}) => (
    <CardWhite className="text-center w-100" color="#295C7A">
        <i class={imagename} />
        <FontAwesomeIcon icon={imagename} />
        <GiScales color="#295C7A" size={50} />
        <FontPrimary>{ title }</FontPrimary>
    </CardWhite>
);

export default CardBusinessLaw;
