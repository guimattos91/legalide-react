import styled from "styled-components";

export const UlFooterSocial = styled.ul`
    list-style: none;
    color: white;
    margin: 0;
    padding:0;

    li{
      list-style: none;
      color: white;
    }

    @media (max-width: 768px) {
      padding-top: 1rem;
      padding-bottom: 1rem;  }
`;

export const TextStyled = styled.p`
    list-style: none;
    color: white;
    margin: 0;
    padding: 0;
`;
export const TextLink = styled.p`
    color: white;
    text-decoration: underline;
    margin: 0;
    padding: 0;
`;

export const LinkStyled = styled.a`
    text-decoration: none;
    color: white;
    padding-left: 0.25rem;
    padding-right: 0.25rem;

    :visited{
      color: white;
    }
`;

export const  SocialFooterStyle = styled.main`
    background-color: #252B42;
    flex: flex;
    justify-content: space-between;
    align-items: center;
`;

