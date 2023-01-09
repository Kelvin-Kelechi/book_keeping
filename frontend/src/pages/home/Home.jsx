import React from "react";
import Featured from "../../components/featured/Featured";
import FeaturedProPerties from "../../components/featuredProperties/FeaturedProPerties";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import MailList from "../../components/mailList/MailList";
import Navbar from "../../components/navbar/Navbar";
import PropertyList from "../../components/propertyList/PropertyList";
import { HomeContainer, HomeTitle } from "./home.style";

const Home = () => {
  return (
    <>
      <Navbar />
      <Header />{" "}
      <HomeContainer>
        <Featured />
        <HomeTitle>Browse by property type</HomeTitle>
        <PropertyList/>
         <HomeTitle>Homes guests love</HomeTitle>
         <FeaturedProPerties/>
         <MailList/>
         <Footer/>
      </HomeContainer>
    </>
  );
};

export default Home;
