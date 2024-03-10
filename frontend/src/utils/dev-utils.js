// Description: This file contains the fake server for development purposes.

import { fakeCards } from "./fakeData";

export const fakeServer = (endpoint, options) => {
  // to be deleted
  switch (endpoint) {
    case "cards":
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(fakeCards);
        }, 3000);
      });
    case "cardsWithSearch":
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(fakeSearch(fakeCards.all, options.searchTerm));
        }, 3000);
      });
    case "cardsWithFilter":
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(fakeFilterCards(fakeCards.all, options.filterOptions));
        }, 3000);
      });
    case "cardsWithFilterAndSearch":
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          const filteredCards = fakeSearch(fakeCards.all, options.searchTerm);
          console.log(filteredCards);
          if (filteredCards.all.length === 0) {
            resolve({ all: [] });
          } else {
            resolve(fakeFilterCards(filteredCards.all, options.filterOptions));
          }
        }, 3000);
      });
    default:
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve();
        }, 3000);
      });
  }
};

const fakeFilterCards = (cards, filterOptions) => {
  // filter options
  // price: { min: minPrice, max: maxPrice},
  //   rarity: { min: rarityRange[rarity][0], max: rarityRange[rarity][1] },
  //   condition: condition,
  //   releaseDate: [startDate, endDate],
  const filteredCards = cards.filter((card) => {
    if (
      card.marketPrice >= filterOptions.price.min &&
      card.marketPrice <= filterOptions.price.max &&
      card.rarity >= filterOptions.rarity.min &&
      card.rarity <= filterOptions.rarity.max &&
      card.condition === filterOptions.condition
    ) {
      return true;
    }
    // if (card.releaseDate >= filterOptions.releaseDate[0] && card.releaseDate <= filterOptions.releaseDate[1]) {
    //   return true;
    // }
    return false;
  });
  console.log(filteredCards);
  return {
    all: filteredCards,
  };
};

export const fakeSearch = (cards, searchTerm) => {
  const filteredCards = cards.filter((card) => {
    if (card.name.toLowerCase().includes(searchTerm.toLowerCase())) {
      return true;
    }
    if (card.tags.join("").toLowerCase().includes(searchTerm.toLowerCase())) {
      return true;
    }
    if (
      card.specialAttributes
        .join("")
        .toLowerCase()
        .includes(searchTerm.toLowerCase())
    ) {
      return true;
    }
    if (card.condition.toLowerCase().includes(searchTerm.toLowerCase())) {
      return true;
    }
    if (card.rarity.toLowerCase().includes(searchTerm.toLowerCase())) {
      return true;
    }
    return false;
  });

  return {
    all: filteredCards,
  };
};
