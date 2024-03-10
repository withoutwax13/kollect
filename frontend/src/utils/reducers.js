import { fakeCards } from "./fakeData";
import { combineReducers } from "redux";

const testAdminId = "788e9252-3fd7-4c99-a158-0252f6e5b7d0";

const initialUsersState = {};
const initialArtistsState = {};
const initialAuthState = {
  isLoggedIn: true,
  currentUser: {
    userId: testAdminId,
    userType: "trader",
    email: "test@test.com",
    username: "admin",
    profilePicture:
      "https://www.allkpop.com/upload/2020/05/content/261217/1590509822-twice.jpg",
    ownedCards: fakeCards.all
      .filter((card) => card.userId === testAdminId)
      .map((card) => card.cardId),
    credibilityRating: [],
  },
};

function cardsReducer(state = {}, action) {
  switch (action.type) {
    case "FETCH_CARDS":
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
}

function usersReducer(state = initialUsersState, action) {
  switch (action.type) {
    case "FETCH_USERS":
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
}

function artistsReducer(state = initialArtistsState, action) {
  switch (action.type) {
    case "FETCH_ARTISTS":
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
}

function authReducer(state = initialAuthState, action) {
  switch (action.type) {
    case "FETCH_CURRENT_USER":
      console.log(state)
      return {
        ...state,
      };
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  cards: cardsReducer,
  users: usersReducer,
  artists: artistsReducer,
  auth: authReducer,
});

export default rootReducer;
