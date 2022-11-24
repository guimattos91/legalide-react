import styled from "styled-components";
import BannerBackground from '../../assets/background.png';

export const HeaderStyles = styled.header`
    background-color: #fff;
    background-image: url(${BannerBackground});
    background-repeat: no-repeat;
    background-size: cover;
    color: #fff;
`;

export const OffCanvasBody = styled.div`
    background-color: #252B42;
`;

export const ListStyleNone = styled.ul`
    list-style: none;
    flex: flex;
    li{
      :hover{
        text-decoration: underline white;
      }
    }
`;

export const ListStyleNoneMobile = styled.ul`
    list-style: none;

`;


export const TitleH1Martel = styled.h1`
    font-family: 'Martel', serif;
    font-weight: bolder;
    color: white;
    padding: 0;
    margin: 0;
`;

export const BannerTitle = styled.h2`
    font-family: 'Martel', serif;
    font-weight: 900;
    text-align: start;
    flex: flex;
    flex-wrap: wrap;
    font-size: 72px;
    @media (max-width: 768px) {
      font-size: 36px;
      padding-top: 2rem;
  }
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

    :hover{
      background-color: #252B42;
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

    :hover{
      background-color: white;
      color: #252B42;
    }
`;
