import React from "react";
import Header from "../../components/header/Header";
import Navbar from "../../components/navbar/Navbar";
import {
  ListContainer,
  ListResult,
  ListSearch,
  ListWrapper,
  SearchItem,
  SearchTitle,
} from "./list.style";

const List = () => {
  return (
    <>
      <Navbar />
      <Header />
      <ListContainer>
        <ListWrapper>
          <ListSearch>
            <SearchTitle>Search</SearchTitle>
            <SearchItem>
              <label htmlFor="">Destination</label>
              <input type="text" />
            </SearchItem>
            <SearchItem>
              <label htmlFor="">Check-in date</label>
               
            </SearchItem>
          </ListSearch>
          <ListResult></ListResult>
        </ListWrapper>
      </ListContainer>
    </>
  );
};

export default List;
