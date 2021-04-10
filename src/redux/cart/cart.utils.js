export const addCardItem = (cardItems, cardItemToAdd) => {
  const cardItemExists = cardItems.find(
    (cardItem) => cardItem.id === cardItemToAdd.id
  );

  if (cardItemExists) {
    return cardItems.map((cardItem) =>
      cardItem.id === cardItemToAdd.id
        ? { ...cardItem, quantity: cardItem.quantity + 1 }
        : cardItem
    );
  }

  return [...cardItems, { ...cardItemToAdd, quantity: 1 }];
};
