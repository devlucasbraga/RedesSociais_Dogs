import React from "react";
import { Link } from "react-router-dom";
import { HeaderContainer, Nav } from "./styled";
import { ReactComponent as Dogs } from "../../Assets/dogs.svg";
import { UserContext } from "../../UserContext";

const Header = () => {
  const { data, userLogout } = React.useContext(UserContext);

  return (
    <HeaderContainer>
      <Nav className="container">
        <Link className="logo" to="/" aria-label="Dogs | Home">
          <Dogs />
        </Link>
        {data ? (
          <Link className="login" to="/conta">
            {data.nome}
            <button onClick={userLogout}>Sair</button>
          </Link>
        ) : (
          <Link className="login" to="/login">
            Login / Criar
          </Link>
        )}
      </Nav>
    </HeaderContainer>
  );
};

export default Header;
