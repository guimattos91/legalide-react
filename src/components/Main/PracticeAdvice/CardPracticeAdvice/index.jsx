import { FontPrimary,  FontSecundary } from './style.js';
import { BgWhite } from './style.js';
import { Ratio } from 'react-bootstrap';



const CardPracticeAdvice = ({title, image, description}) => (
<>
    <BgWhite className="g-0 h-100">
        <div className="card-body mx-5">
            <FontPrimary className="mt-4">{ title }</FontPrimary>
            <FontSecundary>{ description } </FontSecundary>
        </div>
    </BgWhite>
    <Ratio
    aspectRatio="16x9"
    style={{
      backgroundImage: `url(${image})`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center center',
    }}
      className="d-flex align-items-end"
    >
      <div />
    </Ratio>
</>
);

export default CardPracticeAdvice
