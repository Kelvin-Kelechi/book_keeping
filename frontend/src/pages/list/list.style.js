import styled from "styled-components";

export const ListContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;
export const ListWrapper = styled.div`
  width: 100%;
  max-width: 1024px;
  display: flex;
  gap: 20px;
`;
export const ListSearch = styled.div`
  flex: 1;
  background-color: #febb02;
  padding: 10px;
  border-radius: 10px;
  position: sticky;
  top: 10px;
  height: max-content;
`;
export const ListResult = styled.div`
  flex: 3;
`;
export const SearchTitle = styled.div`
  font-size: 20px;
  color: #555;
  margin-bottom: 10px;
`;
export const SearchItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  margin-bottom: 10px;
  input {
    height: 30px;
    border: none;
    padding: 5px;
  }
  label {
    font-size: 12px;
  }
  button {
    padding: 10px;
    background-color: #0071c2;
    color: white;
    border: none;
    width: 100%;
    font-weight: 500;
    cursor: pointer;
  }
`;
export const OptionItems = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  color: #555;
  font-size: 12px;
  input {
    width: 50px;
  }
`;
export const Optionsu = styled.div`
  padding: 10px;
`;
export const Span = styled.span`
  height: 30px;
  padding: 5px;
  background-color: white;
  display: flex;
  align-items: center;
  cursor: pointer;
`;
