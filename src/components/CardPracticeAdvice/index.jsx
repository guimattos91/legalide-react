import { FontPrimary,  FontSecundary } from '../CardPracticeAdvice/style.js';
import { BgWhite } from './style.js';
import { Ratio } from 'react-bootstrap';



const CardPracticeAdvice = ({title, image, description}) => (

    <BgWhite>
        <div className="card-body mx-5">
            <FontPrimary className="mt-4">{ title }</FontPrimary>
            <FontSecundary className="mt-4">{ description } </FontSecundary>
        </div>
        <Ratio
          aspectRatio="16x9"
          style={{
            backgroundImage: `url(${image})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center center',
          }}
            className="d-flex align-items-end mt-5"
        >
          <div />
        </Ratio>

</BgWhite>
);

export default CardPracticeAdvice
