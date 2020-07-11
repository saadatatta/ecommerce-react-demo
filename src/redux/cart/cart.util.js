export const addItemToCart = (cartItems, newItem) => {
  const isPresentAlready = cartItems.find((item) => item.id === newItem.id);
  if (isPresentAlready) {
    return cartItems.map((item) =>
      item.id === newItem.id ? { ...item, quantity: item.quantity + 1 } : item
    );
  }
  return [...cartItems, { ...newItem, quantity: 1 }];
};

export const removeItemFromCart = (cartItems, removeItem) => {
  const cartItem = cartItems.find((item) => item.id === removeItem.id);
  if (cartItem && cartItem.quantity === 1) {
    return cartItems.filter((item) => item.id !== cartItem.id);
  }
  return cartItems.map((item) =>
    item.id === cartItem.id ? { ...item, quantity: item.quantity - 1 } : item
  );
};
