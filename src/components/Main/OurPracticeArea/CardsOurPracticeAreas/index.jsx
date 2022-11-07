import { CardWhite, FontPrimary } from './style';


const CardsOurPracticeAreas = ({ title,  icon }) => {
    const Icon = icon
    return(
    <CardWhite className="text-center d-flex flex-column align-items-center w-100">
        <Icon color="#295C7A"  className="fa-3x fa-light" />
        <FontPrimary>{ title }</FontPrimary>
    </CardWhite>
)};

export default CardsOurPracticeAreas;
