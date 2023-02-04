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
import {Link} from 'react-router-dom'
const SearchItemu = ({item}) => {
  return (
    <>
      <SearchItem>
        <SiImg src={item.photo[0]} />
        <SiDesc>
          <SiTitle>{item.title}</SiTitle>
          <SiDistance>{item.distance}</SiDistance>
          <SiTaxOp>Free airport taxi</SiTaxOp>
          <SiSubtitle> Studio Apartment with Air conditioning</SiSubtitle>
          <SiFeatures> {item.desc}</SiFeatures>
          <SiCancelOp>Free cancellation</SiCancelOp>
          <SiCancelOpSubtitle>
            {" "}
            You can cancel later, so lock in this great price today!
          </SiCancelOpSubtitle>
        </SiDesc>
        <SiDetails>
          {item.rating && (
            <SiRating>
              <span>Excellent</span>
              <button>{item.rating}</button>
            </SiRating>
          )}
          <SiDetailTexts>
            <SiPrice>${item.cheapestPrice}</SiPrice>
            <SiTaxOp>Includes taxes and fees</SiTaxOp>
             
            <Link to={`/hotels/${item._id}`}><SiCheckButton>See availability</SiCheckButton></Link>
          </SiDetailTexts>
        </SiDetails>
      </SearchItem>
    </>
  );
};

export default SearchItemu;
