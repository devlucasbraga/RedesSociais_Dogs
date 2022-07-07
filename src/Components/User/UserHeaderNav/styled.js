import styled from "styled-components";

export const Navegacao = styled.nav`
  &.navBar {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1rem;

    a,
    button {
      background: #eee;
      border-radius: 0.2rem;
      height: 40px;
      width: 40px;
      display: flex;
      align-items: center;
      justify-content: center;
      border: 1px solid transparent;
      transition: 0.1s;
      cursor: pointer;
      &:hover,
      &:focus {
        background: white;
        box-shadow: 0 0 0 3px #eee;
        border-color: #333;
        outline: none;
      }
      &.active {
        background: white;
        box-shadow: 0 0 0 3px #fea;
        border-color: #fb1;
      }
      &.active svg > * {
        fill: #fb1;
      }
    }
  }

  &.navMobile {
    display: block;
    position: absolute;
    top: 70px;
    right: 0px;
    padding: 0 1rem;
    background: white;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
    border-radius: 0.2rem;
    transform: translateX(-10px);
    opacity: 0;
    pointer-events: none;
  }

  &.navMobileActive {
    transition: 0.3s;
    transform: initial;
    pointer-events: initial;
    opacity: 1;
    z-index: 100;
  }

  &.navMobile a,
  &.navMobile button {
    display: flex;
    align-items: center;
    background: none;
    gap: 5px;
    width: 100%;
    border: none;
    border-bottom: 1px solid #eee;
    padding: 0.5rem;
    cursor: pointer;
    &:hover svg > * {
      fill: #fb1;
    }
  }
`;

export const MenuMobile = styled.button`
  background: #eee;
  border-radius: 0.2rem;
  height: 40px;
  width: 40px;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid transparent;
  transition: 0.1s;
  cursor: pointer;
  &::after {
    content: "";
    display: block;
    width: 1.2rem;
    height: 2px;
    border-radius: 2px;
    background: currentColor;
    box-shadow: 0 6px currentColor, 0 -6px currentColor;
    transition: 0.2s;
  }
  &:hover,
  &:focus,
  .mobileButtonActive {
    background: white;
    box-shadow: 0 0 0 3px #fea;
    border-color: #fb1;
    outline: none;
    color: #fb1;
  }
  &.mobileButtonActive::after {
    transform: rotate(90deg);
    width: 4px;
    height: 4px;
    box-shadow: 0 8px currentColor, 0 -8px currentColor;
  }
`;
