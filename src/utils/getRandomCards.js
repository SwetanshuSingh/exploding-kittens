import { v4 as uuid } from "uuid";

// Function to generate a random index
const getRandomIndex = (max) => Math.floor(Math.random() * max);

// Function to get five random cards
export const getRandomCards = (cardsArray, count) => {
  const randomCards = [];
  const availableIndices = [...Array(cardsArray.length).keys()];

  for (let i = 0; i < count; i++) {
    if (availableIndices.length === 0) {
      // If no more available indices, break the loop
      break;
    }

    // Choose a random index from the available indices
    const randomIndex = getRandomIndex(availableIndices.length);

    // Add the corresponding card object to the randomCards array
    randomCards.push({
      id: uuid(),
      cardName: cardsArray[availableIndices[randomIndex]],
    });
  }

  return randomCards;
};
