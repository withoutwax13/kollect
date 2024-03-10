import { fakeServer } from "./dev-utils";

export const fetchCards = ({ searchTerm = "", filterOptions = {} }) => {
  return async (dispatch) => {
    if (searchTerm.length === 0 && Object.keys(filterOptions).length === 0) {
      const cards = await fakeServer("cards");
      dispatch({
        type: "FETCH_CARDS",
        payload: cards,
      });
    }
    if(searchTerm.length > 0 && Object.keys(filterOptions).length > 0) {
      const cards = await fakeServer("cardsWithFilterAndSearch", {
        searchTerm: searchTerm,
        filterOptions: filterOptions
      });
      dispatch({
        type: "FETCH_CARDS",
        payload: cards,
      });
    }
    if (searchTerm.length > 0) {
      const cards = await fakeServer("cardsWithSearch", {
        searchTerm: searchTerm,
      });
      dispatch({
        type: "FETCH_CARDS",
        payload: cards,
      });
    }
    if(Object.keys(filterOptions).length > 0) {
      const cards = await fakeServer("cardsWithFilter", {
        searchTerm: searchTerm,
        filterOptions: filterOptions
      });
      dispatch({
        type: "FETCH_CARDS",
        payload: cards,
      });
    }
  };
};

export const fetchUsers = () => {
  return {
    type: "FETCH_USERS",
    payload: {},
  };
};

export const fetchArtists = () => {
  return {
    type: "FETCH_ARTISTS",
    payload: {},
  };
};

export const fetchCurrentUser = () => {
  return {
    type: "FETCH_CURRENT_USER",
  };
};
