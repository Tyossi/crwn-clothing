import cartActionTypes from "./cart.action.types";
import { addCardItem } from "./cart.utils";

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
        cartItems: addCardItem(state.cartItems, action.payload),
      };

    default:
      return state;
  }
};

export default CartReducer;
