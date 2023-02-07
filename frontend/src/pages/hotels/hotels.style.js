import styled from "styled-components";
import { IoExitOutline } from "react-icons/io5";
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";
export const HotelContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
`;
export const HotelWrapper = styled.div`
  width: 100%;
  max-width: 1024px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  position: relative;
  button {
    position: absolute;
    top: 10px;
    right: 0;
    border: none;
    padding: 10px 20px;
    background-color: #0071c2;
    color: white;
    font-weight: bold;
    border-radius: 5px;
    cursor: pointer;
  }
`;
export const HotelTitle = styled.h1`
  font-size: 24px;
`;
export const HotelAddress = styled.div`
  font-size: 12px;
  display: flex;
  align-items: center;
  gap: 10px;
`;
export const HotelImgWrapper = styled.div`
  width: 33%;
  img {
    width: 100%;
    object-fit: cover;
    cursor: pointer;
  }
`;
export const HotelDistance = styled.span`
  color: #0071c2;
  font-weight: 500;
`;
export const HotelPriceHighLight = styled.span`
  color: #008009;
  font-weight: 500;
`;
export const HotelImages = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;
export const HotelDetails = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
  margin-top: 20px;
`;
export const HotelDetailsTexts = styled.div`
  flex: 3;
`;
export const HotelDetailsPrice = styled.div`
  flex: 1;
  background-color: #ebf3ff;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  h1 {
    font-size: 18px;
    color: #555;
  }
  h2 {
    font-weight: 300;
  }
  span {
    font-size: 14px;
  }
  button {
    border: none;
    padding: 10px 20px;
    background-color: #0071c2;
    color: white;
    font-weight: bold;
    cursor: pointer;
    border-radius: 5px;
  }
`;
export const HotelDesc = styled.p`
  font-size: 14px;
  margin-top: 20px;
`;

export const Slider = styled.div`
  position: sticky;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.613);
  z-index: 999;
  display: flex;
  align-items: center;
`;

export const SliderWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 80%;
    height: 80vh;
  }
`;
export const SliderExit = styled(IoExitOutline)`
  position: absolute;
  top: 20px;
  right: 20px;
  font-size: 30px;
  color: lightgray;
  cursor: pointer;
`;
export const SliderArrLeft = styled(FaArrowCircleLeft)`
  margin: 20px;
  font-size: 50px;
  color: lightgray;
  cursor: pointer;
`;
export const SliderArrRight = styled(FaArrowCircleRight)`
  margin: 20px;
  font-size: 50px;
  color: lightgray;
  cursor: pointer;
`;
