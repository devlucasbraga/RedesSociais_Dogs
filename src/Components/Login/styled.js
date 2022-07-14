import styled from "styled-components";
import loginBg from "../../Assets/login.jpg";

export const LoginContainer = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  min-height: 100vh;
  gap: 2rem;

  &::before {
    display: block;
    content: "";
    background: url(${loginBg}) no-repeat center center;
    background-size: cover;
  }

  .forms {
    max-width: 30rem;
    padding: 1rem;
    margin-top: 20vh;
  }

  @media (max-width: 40rem) {
    grid-template-columns: 1fr;
    &::before {
      display: none;
    }
    .forms {
      max-width: 100%;
    }
  }
`;
