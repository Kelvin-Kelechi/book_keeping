import styled from "styled-components";
import { FaBed, FaCalendarDay } from "react-icons/fa";
import { GiPerson } from "react-icons/gi";
import { DateRange } from "react-date-range";

export const DateRangeStyle = styled(DateRange)`
  position: absolute;
  top: 50px;
  z-index: 2;
`;
export const FaBedStyle = styled(FaBed)`
  color: lightgray;
`;
export const FaCalendarDayStyle = styled(FaCalendarDay)`
  color: lightgray;
`;
export const GiPersonStyle = styled(GiPerson)`
  color: lightgray;
`;
export const HeaDer = styled.div`
  background-color: #003580;
  color: white;
  display: flex;
  justify-content: center;
  position: relative;
`;
export const HeaderContainer = styled.div`
  width: 100%;
  max-width: 1024px;
  margin: 20px 0px 100px 0px;
`;
export const HeaderList = styled.div`
  display: flex;
  gap: 40px;
  margin-bottom: 50px;
`;
export const HeaderListItem = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  border: ${(props) => (props.active ? "1px solid white" : "none")};
  padding: ${(props) => (props.active ? "10px" : "none")};
  border-radius: ${(props) => (props.active ? "20px" : "none")};
`;

export const HeaderTitle = styled.h1``;
export const HeaderDesc = styled.p`
  margin: 20px 0px;
`;
export const HeaderBtn = styled.button`
  background-color: #0071c2;
  color: white;
  font-weight: 500;
  border: none;
  padding: 10px;
  cursor: pointer;
`;
export const HeaderSearch = styled.div`
  height: 30px;
  background-color: white;
  border: 3px solid #febb02;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 10px 0px;
  border-radius: 5px;
  position: absolute;
  bottom: -25px;
  width: 100%;
  max-width: 1024px;
`;
export const Options = styled.div`
  z-index: 2;
  position: absolute;
  top: 50px;
  background-color: white;
  color: gray;
  border-radius: 5px;
  -webkit-box-shadow: 0px 0px 10px -5px rgba(0, 0, 0, 0.4);
  box-shadow: 0px 0px 10px -5px rgba(0, 0, 0, 0.4);`;
export const OptionsItem = styled.div`
  width: 200px;
  display: flex;
  justify-content: space-between;
  margin: 10px;
  button {
    width: 30px;
    height: 30px;
    border: 1px solid #0071c2;
    color: #0071c2;
    cursor: pointer;
    background-color: white;
  }
  button:disabled {
    cursor: not-allowed;
  }
`;
export const OptionsText = styled.div``;
export const OptionsCounter = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 12px;
  color: black;
`;
export const HeaderSearchItem = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  input {
    border: none;
    outline: none;
  }
  span {
    color: lightgray;
    cursor: pointer;
  }
`;



