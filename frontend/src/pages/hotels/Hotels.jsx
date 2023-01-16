import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import {MdLocationOn} from 'react-icons/md'
import { HotelContainer, HotelDistance, HotelPriceHighLight, HotelTitle, HotelWrapper } from "./hotels.style";
const Hotels = () => {
  return (
    <>
      <Navbar />
      <Header type="list" />
      <HotelContainer>
        <HotelWrapper>
          <HotelTitle>Grand Hotel</HotelTitle>
          <HotelAddress>
            <MdLocationOn />
            <span>Yaba, Lagos State, Nigeria.</span>
          </HotelAddress>
          <HotelDistance>Excellent location – 500m from center</HotelDistance>
          <HotelPriceHighLight>
            {" "}
            Book a stay over $114 at this property and get a free airport taxi
          </HotelPriceHighLight>
        </HotelWrapper>
      </HotelContainer>
    </>
  );
};

export default Hotels;
