import React, { useContext, useState } from "react";
import {
  DateRangeStyle,
  FaBedStyle,
  FaCalendarDayStyle,
  GiPersonStyle,
  HeaDer,
  HeaderBtn,
  HeaderContainer,
  HeaderDesc,
  HeaderList,
  HeaderListItem,
  HeaderSearch,
  HeaderSearchItem,
  HeaderTitle,
  Options,
  OptionsCounter,
  OptionsItem,
} from "./header.style";
import { FaBed, FaPlane, FaCar, FaTaxi } from "react-icons/fa";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { format } from "date-fns";
import { useNavigate } from "react-router-dom";
import { SearchContext } from "../../context/context";
import { AuthContext } from "../../context/authContext";

const Header = ({ type }) => {
  const navigate = useNavigate();
  const [openDate, setOpenDate] = useState(false);
  const [destination, setDestination] = useState("");
  const [optionOpen, setOptionOpen] = useState(false);
  const [option, setOption] = useState({ adult: 1, children: 0, room: 1 });
  const [dates, setDates] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  const { dispatch } = useContext(SearchContext);
  const { user } = useContext(AuthContext);
  const handleOption = (name, operation) => {
    setOption((prev) => {
      return {
        ...prev,
        [name]: operation === "i" ? option[name] + 1 : option[name] - 1,
      };
    });
  };

  const handleSearch = () => {
    dispatch({ type: "NEW_SEARCH", payload: { destination, dates, option } });
    navigate("/hotels", { state: { destination, dates, option } });
  };

  return (
    <>
      <HeaDer>
        <HeaderContainer>
          <HeaderList>
            <HeaderListItem active>
              <FaBed />
              <span>Stays</span>
            </HeaderListItem>
            <HeaderListItem>
              <FaPlane />
              <span>Flights</span>
            </HeaderListItem>
            <HeaderListItem>
              <FaCar />
              <span>Car Rentals</span>
            </HeaderListItem>
            <HeaderListItem>
              <FaBed />
              <span>Attractions</span>
            </HeaderListItem>
            <HeaderListItem>
              <FaTaxi />
              <span>Airport Taxis</span>
            </HeaderListItem>
          </HeaderList>
          {type !== "list" && (
            <>
              <HeaderTitle>A lifetime of discounts? It's Genius.</HeaderTitle>
              <HeaderDesc>
                Get rewarded for your travels – unlock instant savings of 10% or
                more with a free Kedevbooking account
              </HeaderDesc>
              {!user && <HeaderBtn>Sign in / Register</HeaderBtn>}
              <HeaderSearch>
                <HeaderSearchItem>
                  <FaBedStyle />
                  <input
                    type="text"
                    placeholder="Where are you going?"
                    onChange={(e) => setDestination(e.target.value)}
                  />
                </HeaderSearchItem>
                <HeaderSearchItem>
                  <FaCalendarDayStyle />
                  <span onClick={() => setOpenDate(!openDate)}>
                    {`${format(dates[0].startDate, "dd/MM/yyyy")} to ${format(
                      dates[0].endDate,
                      "dd/MM/yyyy"
                    )}`}
                  </span>
                  {openDate && (
                    <DateRangeStyle
                      editableDateInputs={true}
                      onChange={(item) => setDates([item.selection])}
                      moveRangeOnFirstSelection={false}
                      ranges={dates}
                      minDate={new Date()}
                    />
                  )}
                </HeaderSearchItem>
                <HeaderSearchItem>
                  <GiPersonStyle />
                  <span
                    onClick={() => setOptionOpen(!optionOpen)}
                  >{`${option.adult} adult . ${option.children} children . ${option.room} room`}</span>
                  {optionOpen && (
                    <Options>
                      <OptionsItem>
                        <span>Adult</span>
                        <OptionsCounter>
                          <button
                            disabled={option.adult <= 1}
                            onClick={() => handleOption("adult", "d")}
                          >
                            -
                          </button>
                          <span>{option.adult}</span>
                          <button onClick={() => handleOption("adult", "i")}>
                            +
                          </button>
                        </OptionsCounter>
                      </OptionsItem>
                      <OptionsItem>
                        <span>Children</span>
                        <OptionsCounter>
                          <button
                            disabled={option.children <= 0}
                            onClick={() => handleOption("children", "d")}
                          >
                            -
                          </button>
                          <span>{option.children}</span>
                          <button onClick={() => handleOption("children", "i")}>
                            +
                          </button>
                        </OptionsCounter>
                      </OptionsItem>
                      <OptionsItem>
                        <span>Room</span>
                        <OptionsCounter>
                          <button
                            disabled={option.room <= 1}
                            onClick={() => handleOption("room", "d")}
                          >
                            -
                          </button>
                          <span>{option.room}</span>
                          <button onClick={() => handleOption("room", "i")}>
                            +
                          </button>
                        </OptionsCounter>
                      </OptionsItem>
                    </Options>
                  )}
                </HeaderSearchItem>
                <HeaderSearchItem onClick={handleSearch}>
                  <HeaderBtn>Search</HeaderBtn>
                </HeaderSearchItem>
              </HeaderSearch>
            </>
          )}
        </HeaderContainer>
      </HeaDer>
    </>
  );
};

export default Header;
