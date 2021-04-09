import React from "react";
import "./cart-dropdown.styles.scss";
import { connect } from "react-redux";
import CustomButton from "../custom-button.component/custom-button.component";
import CartItems from "../cart-item.component/cart-item.component";

const CartDropdown = ({ cartItems }) => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.map((item) => (
          <CartItems key={item.id} item={item} />
        ))}

        <CustomButton className="button">GO TO CHECKOUT</CustomButton>
      </div>
    </div>
  );
};

const mapStateToProps = ({ cart: { cartItems } }) => ({
  cartItems,
});

export default connect(mapStateToProps)(CartDropdown);
