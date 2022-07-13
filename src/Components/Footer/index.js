import React from "react";
import { FooterContainer } from "./styled";

import { ReactComponent as Dogs } from "../../Assets/dogs-footer.svg";

const Footer = () => {
  return (
    <FooterContainer>
      <Dogs />
      <p>Dogs. Alguns Direitos Reservados.</p>
    </FooterContainer>
  );
};

export default Footer;
