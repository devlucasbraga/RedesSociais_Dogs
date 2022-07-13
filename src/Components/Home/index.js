import React from "react";
import Feed from "../Feed";
import Head from "../Helper/Head";

const Home = () => {
  return (
    <section className="container mainContainer">
      <Head title="Fotos" description="Home do site Dogs, e Feed de fotos." />
      <Feed />
    </section>
  );
};

export default Home;
