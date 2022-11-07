import { ButtonStyled, CardGetInTouch, FontPrimary, FontSecundary, TextStyled } from './style';


const CardsGetInTouch = ({
    title,
    title2,
    description,
    icon,
    textColor,
    borderColor,
    backgroundColor,
    topBottom,
    StartEnd}) => {

    const Icon = icon


    return(
            <CardGetInTouch
            backgroundColor={backgroundColor}
            textColor={textColor}
            topBottom={topBottom}
            StartEnd={StartEnd}
            className="card"
            ><div className="card-body">
                <Icon color={textColor}  className="fa-3x fa-light mt-4" />
                <FontSecundary
                    backgroundColor={backgroundColor}
                    textColor={textColor}
                    className="pt-3"
                >
                    {title}
                </FontSecundary>
                <FontSecundary
                    backgroundColor={backgroundColor}
                    textColor={textColor}
                >
                    {title2}
                </FontSecundary>
                <FontPrimary
                    backgroundColor={backgroundColor}
                    textColor={textColor}
                >
                    {description}
                </FontPrimary>
                <ButtonStyled
                    type="button"
                    backgroundColor={backgroundColor}
                    borderColor={borderColor}
                >
                <TextStyled textColor={borderColor}>
                    Submit Request
                </TextStyled>
                </ButtonStyled></div>
        </CardGetInTouch>
    )};

export default CardsGetInTouch;
