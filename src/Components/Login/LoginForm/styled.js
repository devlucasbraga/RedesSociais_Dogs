import styled from "styled-components";

export const LoginContainer = styled.section`
  form {
    margin-bottom: 2rem;
  }
  .perdeu {
    display: inline-block;
    color: #666;
    padding: 0.5rem 0;
    line-height: 1;
    &::after {
      content: "";
      width: 100%;
      height: 2px;
      background: currentColor;
      display: block;
    }
  }
`;

export const Cadastro = styled.div`
  margin-top: 4rem;
  h2 {
    font-family: var(--type-second);
    line-height: 1;
    font-size: 2rem;
    &::after {
      content: "";
      display: block;
      background: #ddd;
      height: 0.5rem;
      width: 3rem;
      border-radius: 0.2rem;
    }
  }
  p {
    margin-top: 2rem;
    margin-bottom: 2rem;
  }
  a {
    font-size: 1rem;
    font-family: var(--type-first);
    cursor: pointer;
    border: none;
    border-radius: 0.4rem;
    background: #fb1;
    color: #764701;
    min-width: 8rem;
    padding: 0.8rem 1.2rem;
    box-sizing: border-box;
    transition: 0.1s;
    &:hover,
    &:focus {
      outline: none;
      box-shadow: 0 0 0 3px #fea, 0 0 0 4px #fb1;
    }
    &:disabled {
      opacity: 0.5;
      cursor: wait;
    }
  }
`;
