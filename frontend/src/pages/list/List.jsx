import { format } from "date-fns";
import React, { useState } from "react";
import { DateRange } from "react-date-range";
import { useLocation } from "react-router-dom";
import Header from "../../components/header/Header";
import { OptionsItem } from "../../components/header/header.style";
import Navbar from "../../components/navbar/Navbar";
import {
  ListContainer,
  ListResult,
  ListSearch,
  ListWrapper,
  OptionItems,
  Optionsu,
  SearchItem,
  SearchTitle,
  Span,
} from "./list.style";
 
const List = () => {
  const location = useLocation()
   const [openDate, setOpenDate] = useState(false);
  const [destination, setDestination] = useState(location.state.destination);
  const [option, setOption] = useState(location.state.option);
  const [date, setDate] = useState(location.state.date);
  return (
    <>
      <Navbar />
      <Header type="list" />
      <ListContainer>
        <ListWrapper>
          <ListSearch>
            <SearchTitle>Search</SearchTitle>
            <SearchItem>
              <label htmlFor="">Destination</label>
              <input type="text" placeholder={destination} />
            </SearchItem>
            <SearchItem>
              <label htmlFor="">Check-in date</label>
              <Span onClick={() => setOpenDate(!openDate)} active>
                {`${format(date[0].startDate, "dd/MM/yyyy")} to ${format(
                  date[0].endDate,
                  "dd/MM/yyyy"
                )}`}
              </Span>
              {openDate && (
                <DateRange
                  onChange={(item) => setDate([item.selection])}
                  minDate={new Date()}
                  ranges={date}
                />
              )}
            </SearchItem>
            <SearchItem>
              <label htmlFor="">Options</label>
              <Optionsu>
                <OptionItems>
                  <span>
                    Min Price <small> Per night</small>{" "}
                  </span>
                  <input type="number" />
                </OptionItems>
                <OptionItems>
                  {" "}
                  <span>
                    Max Price <small> Per night</small>{" "}
                  </span>
                  <input type="number" />
                </OptionItems>
                <OptionItems>
                  <span>Adult </span>
                  <input type="number" min={1} placeholder={option.adult} />
                </OptionItems>
                <OptionItems>
                  <span>Children </span>
                  <input type="number" min={0} placeholder={option.children} />
                </OptionItems>
                <OptionItems>
                  <span>Room </span>
                  <input type="number" min={1} placeholder={option.room} />
                </OptionItems>
                 
              </Optionsu>
              <button>Search</button>
            </SearchItem>
          </ListSearch>
          <ListResult></ListResult>
        </ListWrapper>
      </ListContainer>
    </>
  );
};

export default List;
