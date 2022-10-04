import styled from "styled-components";
import BannerBackground from '../../assets/background.png';

export const BannerContainer = styled.div`
    background-color: #fff;
    background-image: url(${BannerBackground});
    background-repeat: no-repeat;
    background-size: cover;
`;

export const ListStyleNone = styled.ul`
    list-style: none;
`;


export const TitleH1Martel = styled.h1`
    font-family: 'Martel', serif;
    font-weight: bolder;
`;

export const BannerTitle = styled.h2`
    font-family: 'Martel', serif;
    font-weight: bolder;
    text-align: start;
`;

export const HeaderStyles = styled.header`
    color: #fff;

`;