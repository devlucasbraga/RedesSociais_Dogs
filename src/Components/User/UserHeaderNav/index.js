import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Navegacao, MenuMobile } from "./styled";
import { UserContext } from "../../../UserContext";
import { ReactComponent as MinhasFotos } from "../../../Assets/feed.svg";
import { ReactComponent as Estatisticas } from "../../../Assets/estatisticas.svg";
import { ReactComponent as Adicionar } from "../../../Assets/adicionar.svg";
import { ReactComponent as Sair } from "../../../Assets/sair.svg";
import useMedia from "../../../Hooks/useMedia";

const UserHeaderNav = () => {
  const { userLogout } = React.useContext(UserContext);
  const mobile = useMedia("(max-width: 40rem)");
  const [mobileMenu, setMobileMenu] = React.useState(false);

  const { pathname } = useLocation();
  React.useEffect(() => {
    setMobileMenu(false);
  }, [pathname]);

  return (
    <>
      {mobile && (
        <MenuMobile
          className={`${!mobileMenu ? null : "mobileButtonActive"} `}
          aria-label="Menu"
          onClick={() => setMobileMenu(!mobileMenu)}
        ></MenuMobile>
      )}

      <Navegacao
        className={`${mobile ? "navMobile" : "navBar"} ${
          mobileMenu && "navMobileActive"
        }`}
      >
        <NavLink to="/conta" end>
          <MinhasFotos />
          {mobile && "Minhas Fotos"}
        </NavLink>
        <NavLink to="/conta/estatisticas">
          <Estatisticas />
          {mobile && "Estatisticas"}
        </NavLink>
        <NavLink to="/conta/postar">
          <Adicionar />
          {mobile && "Adicionar Foto"}
        </NavLink>
        <button onClick={userLogout}>
          <Sair />
          {mobile && "Sair"}
        </button>
      </Navegacao>
    </>
  );
};

export default UserHeaderNav;
