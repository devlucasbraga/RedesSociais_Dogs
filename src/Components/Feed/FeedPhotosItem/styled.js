import styled from "styled-components";
import visualizacao from "../../../Assets/visualizacao.svg";

export const PhotoItem = styled.li`
  display: grid;
  border-radius: 0.3rem;
  overflow: hidden;
  cursor: pointer;

  &:nth-child(2) {
    grid-column: 2/4;
    grid-row: span 2;
  }

  @media (max-width: 40rem) {
    &:nth-child(2) {
      grid-column: initial;
      grid-row: initial;
    }
  }

  img {
    grid-area: 1/1;
  }
`;

export const Visualizacao = styled.span`
  display: none;
  background: rgba(0, 0, 0, 0.3);
  color: white;
  font-size: 1rem;
  text-align: center;
  align-items: center;
  justify-content: center;
  grid-area: 1/1;
    &:hover {
      display: flex;
    }
  &::before {
    width: 16px;
    height: 10px;
    content: "";
    margin-right: 0.25rem;
    background: url(${visualizacao}) no-repeat;
  }
`;
