import { FontPrimary, BgWhite, FontSecundary } from '../CardFraudsMislead/style.js';



const CardPracticeAdvice = (title, image, description) => (

    <BgWhite>
        <FontPrimary className="p-3">{title}</FontPrimary>
        <FontSecundary className="p-3"> {description} </FontSecundary>
        <img src={image} className="card-img-top  justify-content-end pt-4" alt="cover" />
    </BgWhite>

);

export default CardPracticeAdvice
