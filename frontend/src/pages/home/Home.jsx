import React from "react";
import Featured from "../../components/featured/Featured";
import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";
import { HomeContainer, HomeTitle } from "./home.style";

const Home = () => {
  return (
    <>
      <Navbar />
      <Header />{" "}
      <HomeContainer>
        <Featured />
        <HomeTitle>Browse by property type</HomeTitle>
      </HomeContainer>
    </>
  );
};

export default Home;
