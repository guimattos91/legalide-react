import styled, { css }from "styled-components";

export const OffCanvasBody = styled.div`
    background-color: #252B42;
`;

export const ListStyleNone = styled.ul`
    list-style: none;
    flex: flex;
`;


export const BannerTitle = styled.h2`
    font-family: 'Martel', serif;
    font-weight: 900;
    text-align: center;
    flex: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    font-size: 36px;
`;

export const HeaderStyles = styled.header`
    color: #fff;
`;


export const Container = styled.section`
  position: absolute;
  backdrop-filter: blur(3px);
  width: 280px;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 5;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  background: #252b42;
  opacity: 0;
  pointer-events: none;
  transform: translatex(-50px);
  transition: .5s;
  > svg {
    position: absolute;
    top: 1rem;
    right: 1rem;
    transform: rotate(45deg);
    transition: .7s;
  }

  nav {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 2rem;
    transform: scale(0.7);
    transition: .7s;
  }

  a{
    color: white;
    text-decoration: none;
    font-size: 30px;
  }

  ${({ isVisible }) => isVisible && css`
    opacity: 1;
    pointer-events: auto;
    transform: translateY(0px);
    > svg {
      transform: rotate(0deg);
    }
  `}`
