import styled from "styled-components";
import BannerBackground from '../../assets/background.png';

export const BannerContainer = styled.div`
    background-color: #fff;
    background-image: url(${BannerBackground});
    background-repeat: no-repeat;
    background-size: cover;
`;

export const OffCanvasBody = styled.div`
    background-color: #252B42;
`;

export const ListStyleNone = styled.ul`
    list-style: none;
    flex: flex;
`;

export const ListStyleNoneMobile = styled.ul`
    list-style: none;
    li{
      font-size: 1.5em;
    }
`;


export const TitleH1Martel = styled.h1`
    font-family: 'Martel', serif;
    font-weight: bolder;
    color: white;
`;

export const BannerTitle = styled.h2`
    font-family: 'Martel', serif;
    font-weight: bolder;
    text-align: start;
`;

export const HeaderStyles = styled.header`
    color: #fff;
`;

export const YellowButtonBanner = styled.button`
    border-radius: 100px;
    padding: 5px 30px 5px 30px ;
    background-color: #D0A144;
    margin-right: 2%;
    flex: flex;
    align-items: center;
    border: none;
    color: white;
    font-weight: 700;
    p{
      padding: 0;
      margin:0;
    }
`;
export const TransparentButtonBanner = styled.button`
    border-radius: 100px;
    padding: 5px 30px 5px 30px ;
    background-color: transparent;
    margin-right: 2%;
    flex: flex;
    align-items: center;
    border: 2px solid white;
    color: white;
    font-weight: 700;
    p{
      padding: 0;
      margin:0;
    }
`;
