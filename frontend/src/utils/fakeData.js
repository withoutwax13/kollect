import { v4 as uuidv4 } from 'uuid';

export const fakeCards = {
    all: [
      {
        cardId: uuidv4(),
        name: "Twice Nayeon - More & More",
        userId: "788e9252-3fd7-4c99-a158-0252f6e5b7d0",
        artistId: "963668e5-1324-4a03-95d8-077eee826517",
        assets: [
          {
            assetId: "bd2d5017-0673-4390-adae-124cf9c2050d",
            assetType: "image",
            url: "https://www.allkpop.com/upload/2020/05/content/261217/1590509822-twice.jpg",
          },
        ],
        tags: ["twice", "nayeon", "more & more"],
        count: 1,
        userAssignedPrice: 120,
        userAssignedCurrency: "USD",
        marketPrice: 120, // marketPrice is equal to userAssignedPrice if there are no bids
        bidNumber: 0,
        rarity: "0.8",
        condition: "good",
        specialAttributes: ["signed"],
        releaseDate: "2020-06-01",
      },
      {
        cardId: uuidv4(),
        name: "Red Velvet Seulgi Winter SMCU Palace Portrait ver.",
        userId: "788e9252-3fd7-4c99-a158-0252f6e5b7d0",
        artistId: "27341211-07af-4278-b201-c457ffa4836e",
        assets: [
          {
            assetId: "eaf4fb81-4db5-4052-9e48-b6e934f199d9",
            assetType: "image",
            url: "https://i.pinimg.com/736x/c9/30/3c/c9303cbcb07f7b658a7e0e24a9f2cd94.jpg",
          },
        ],
        tags: ["red velvet", "seulgi", "portrait"],
        count: 1,
        userAssignedPrice: 300,
        userAssignedCurrency: "USD",
        marketPrice: 300,
        bidNumber: 0,
        rarity: "0.1",
        condition: "poor",
        specialAttributes: ["signed"],
        releaseDate: "2022-06-05",
      },
      {
        cardId: uuidv4(),
        name: "Juria Mascara Era",
        userId: "788e9252-3fd7-4c99-a158-0252f6e5b7d0",
        artistId: "6c162665-3aa9-4e70-8a2e-175731412540",
        assets: [
          {
            assetId: "85696c8c-b54a-4105-97c8-0320263c4f57",
            assetType: "image",
            url: "https://th.bing.com/th/id/OIP.UcNDFbpFC7Lj-ZaF1bC7dAHaJ4?rs=1&pid=ImgDetMain",
          },
        ],
        tags: ["xg", "juria", "portrait"],
        count: 1,
        userAssignedPrice: 100,
        userAssignedCurrency: "USD",
        marketPrice: 100,
        bidNumber: 0,
        rarity: "0.1",
        condition: "near mint",
        specialAttributes: [],
        releaseDate: "2022-06-05",
      }
    ],
  };