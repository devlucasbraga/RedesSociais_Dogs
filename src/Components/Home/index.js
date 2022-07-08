import React from "react";
import Feed from "../Feed";

import { ContainerFeed } from "./styled";

const Home = () => {
  return (
    <ContainerFeed className="mainContainer">
      <Feed />
    </ContainerFeed>
  );
};

export default Home;
