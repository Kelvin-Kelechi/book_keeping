import React, { useState } from "react";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import MailList from "../../components/mailList/MailList";
import { MdLocationOn } from "react-icons/md";
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";

import {
  HotelAddress,
  HotelContainer,
  HotelDesc,
  HotelDetails,
  HotelDetailsPrice,
  HotelDetailsTexts,
  HotelDistance,
  HotelImages,
  HotelImgWrapper,
  HotelPriceHighLight,
  HotelTitle,
  HotelWrapper,
  Slider,
  SliderArrLeft,
  SliderArrRight,
  SliderExit,
  SliderImg,
  SliderWrapper,
} from "./hotels.style";
import useFetch from "../../hooks/useFetch";
import { useLocation } from "react-router-dom";
const Hotels = () => {
  const [sliderNum, setSliderNum] = useState(0);
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const { data, error, loading } = useFetch(`/hotels/find/${id}`);

  const handleOpen = (i) => {
    setSliderNum(i);
    setOpen(true);
  };
  const handleMove = (direction) => {
    let newSliderMove;
    if (direction === "l") {
      newSliderMove = sliderNum === 0 ? 5 : sliderNum - 1;
    } else {
      newSliderMove = sliderNum === 5 ? 0 : sliderNum + 1;
    }
    setSliderNum(newSliderMove);
  };

  return (
    <>
      <Navbar />
      <Header type="list" />
      {loading ? (
        "loading..please wait"
      ) : (
        <HotelContainer>
          {open && (
            <Slider>
              <SliderExit onClick={() => setOpen(false)} />
              <SliderArrLeft onClick={() => handleMove("l")} />
              <SliderWrapper>
                <img src={data.photos[sliderNum].src} alt="" />
              </SliderWrapper>
              <SliderArrRight onClick={() => handleMove("r")} />
            </Slider>
          )}
          <HotelWrapper>
            <HotelTitle>{data.name}</HotelTitle>
            <HotelAddress>
              <MdLocationOn />
              <span>{data.address}</span>
            </HotelAddress>
            <HotelDistance>
              Excellent location – {data.distance}m from center
            </HotelDistance>
            <HotelPriceHighLight>
              {" "}
              Book a stay over ${data.cheapestPrice} at this property and get a
              free airport taxi
            </HotelPriceHighLight>
            <HotelImages>
              {data.photos?.map((photo, i) => (
                <HotelImgWrapper key={i}>
                  <img onClick={() => handleOpen(i)} src={photo} alt="" />
                </HotelImgWrapper>
              ))}
            </HotelImages>
            <HotelDetails>
              <HotelDetailsTexts>
                <HotelTitle>{data.title}</HotelTitle>
                <HotelDesc>{data.desc}</HotelDesc>
              </HotelDetailsTexts>
              <HotelDetailsPrice>
                <h1>Perfect for a 9-night stay!</h1>
                <span>
                  Located in the real heart of Krakow, this property has an
                  excellent location score of 9.8!
                </span>
                <h2>
                  <b>$945</b> (9 nights)
                </h2>
                <button>Reserve or Book Now!</button>
              </HotelDetailsPrice>
            </HotelDetails>
          </HotelWrapper>
          <MailList />
          <Footer />
        </HotelContainer>
      )}
    </>
  );
};

export default Hotels;
