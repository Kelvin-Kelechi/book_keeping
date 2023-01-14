import React from "react";
import {
  Img,
  SearchItem,
  SiCancelOp,
  SiCancelOpSubtitle,
  SiCheckButton,
  SiDesc,
  SiDetails,
  SiDetailTexts,
  SiDistance,
  SiFeatures,
  SiImg,
  SiPrice,
  SiRating,
  SiSubtitle,
  SiTaxOp,
  SiTitle,
} from "./searchItemu.style";

const SearchItemu = () => {
  return (
    <>
      <SearchItem>
        <SiImg src="https://cf.bstatic.com/xdata/images/hotel/square600/261707778.webp?k=fa6b6128468ec15e81f7d076b6f2473fa3a80c255582f155cae35f9edbffdd78&o=&s=1" />
        <SiDesc>
          <SiTitle>Tower Street Apartments</SiTitle>
          <SiDistance>500m from center</SiDistance>
          <SiTaxOp>Free airport taxi</SiTaxOp>
          <SiSubtitle> Studio Apartment with Air conditioning</SiSubtitle>
          <SiFeatures> Entire studio • 1 bathroom • 21m² 1 full bed</SiFeatures>
          <SiCancelOp>Free cancellation</SiCancelOp>
          <SiCancelOpSubtitle>
            {" "}
            You can cancel later, so lock in this great price today!
          </SiCancelOpSubtitle>
        </SiDesc>
        <SiDetails>
          <SiRating>
            <span>Excellent</span>
            <button>8.9</button>
          </SiRating>
          <SiDetailTexts>
            <SiPrice>$133</SiPrice>
            <SiTaxOp>Includes taxes and fees</SiTaxOp>
            <SiCheckButton>See availability</SiCheckButton>
          </SiDetailTexts>
        </SiDetails>
      </SearchItem>
    </>
  );
};

export default SearchItemu;
