const cartReducer = (state = [], action) => {
  //let cart = state.cart;

  switch (action.type) {
    case "ADD_TO_CART":
      //cart.push(action.payload);
      return [...state, action.payload];
    /* case "UPDATE_CART_QUANTITY":
      let item = cart.find(item => item.photo.id === action.payload.photoId);

      let newCart = cart.filter(
        item => item.photo.id !== action.payload.photoId
      );

      item.quantity = action.payload.quantity;

      newCart.push(item);

      return {
        ...state,
        cart: newCart
      };

    case "REMOVE_FROM_CART":
      return {
        ...state,
        cart: cart.filter(item => item.photo.id !== action.payload.photoId)
      }; */
    default:
      return state;
  }
};

export default cartReducer;
