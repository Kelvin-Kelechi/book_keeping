import { createContext, useReducer } from "react";
const INITIAL_STATE = {
  city: undefined,
  date: [],
  option: {
    children: undefined,
    room: undefined,
    adult: undefined,
  },
};
const SearchContext = createContext(INITIAL_STATE);

export const SearchReducer = (state, action) => {
  switch (action.type) {
    case "NEW_SEARCH":
      return action.payload;
    case "RESET_SEARCH":
      return INITIAL_STATE;
    default:
      return action;
  }
};

export const SearchContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(SearchContext, INITIAL_STATE);

  return (
    <SearchContext.Provider
      value={{ city: state.city, date: state.date, option: state.option, dispatch }}
    >
      {children}
    </SearchContext.Provider>
  );
};
