import styled from "styled-components";

export const ContainerModal = styled.div`
  position: fixed;
  margin: 0 auto;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.4);
  top: 0;
  left: 0;
  display: flex;
  z-index: 1000;
  justify-content: center;
  padding: 2rem calc(4rem + 15px) 2rem 4rem;

  @media (max-width: 40rem) {
    padding: 2rem 2rem 2rem 2rem;
  }
`;
