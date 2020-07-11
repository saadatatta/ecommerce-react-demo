export const addItemToCart = (cartItems, newItem) => {
  const isPresentAlready = cartItems.find((item) => item.id === newItem.id);
  if (isPresentAlready) {
    return cartItems.map((item) =>
      item.id === newItem.id ? { ...item, quantity: item.quantity + 1 } : item
    );
  }
  return [...cartItems, { ...newItem, quantity: 1 }];
};
