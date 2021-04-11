import cartActionTypes from "./cart.action.types";
import { addCartItem, removeItem } from "./cart.utils";

const INITIAL_STATE = {
  hidden: true,
  cartItems: [],
};

const CartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case cartActionTypes.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden,
      };

    case cartActionTypes.ADD_ITEM_TO_CART:
      return {
        ...state,
        cartItems: addCartItem(state.cartItems, action.payload),
      };

    case cartActionTypes.CLEAR_ITEM_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (cartItem) => cartItem.id !== action.payload.id
        ),
      };

    case cartActionTypes.REMOVE_ITEM_FROM_CART:
      return {
        ...state,
        cartItems: removeItem(state.cartItems, action.payload),
      };

    default:
      return state;
  }
};

export default CartReducer;
