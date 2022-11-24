
import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    body, html {
    background-color: #252B42;
    font-family: 'Open Sans', sans-serif;
    padding:0;
    margin:0;
    }
`;

export const LinkStyle = styled.a`
    text-decoration: none;
    color: white;
    :hover{
    text-decoration: none;
    color: white;
    }
`;

