import React from "react";
import { Link } from "react-router-dom";
import { HeaderContainer, Nav } from "./styled";
import { ReactComponent as Dogs } from "../../Assets/dogs.svg";

const Header = () => {
  return (
    <HeaderContainer>
      <Nav className="container">
        <Link className="logo" to="/" aria-label="Dogs | Home">
          <Dogs />
        </Link>
        <Link className="login" to="/login">Login / Criar</Link>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;
