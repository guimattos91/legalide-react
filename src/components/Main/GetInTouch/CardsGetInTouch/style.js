import styled from "styled-components";

export const FontPrimary = styled.h5`
    font-family: 'Martel', serif;
    font-weight: bold;
    color: ${props => props.textColorSecundary};
    text-align: center;
    padding-top: 1rem;
    padding-bottom: 0.5rem;
    margin: 0px;
`;

export const FontSecundary = styled.p`
    font-weight: bold;
    color: ${props => props.textColorSecundary};
    text-align: center;
    margin: 0px;
`;


export const CardGetInTouch = styled.div`
    background-color: white;
    background-color: ${props => props.backgroundColor};
    border-radius: 0px;
    color: #252B42;
    color: ${props => props.textColor};
    border: none;
    text-align: center;
    flex: flex;
    flex-direction: column;
    width: 100%;
    padding: 50px 40px;
    padding: ${props => props.topBottom} ${props => props.StartEnd};

`;

export const ButtonStyled = styled.button`
    background-color: transparent;
    border-radius: 5px;
    border: 1px solid #295C7A;
    border: 1px solid ${props => props.borderColor};
    text-align: center;
    font-weight: 700;
    margin: 5px
`;

export const TextStyled = styled.p`
    text-align: center;
    font-weight: 700;
    color: ${props => props.textColor};
    margin: 5px
`;
