import React from "react";
import { connect } from "react-redux";

import { useNavigate } from "react-router-dom";

import { createStructuredSelector } from "reselect";

import CustomButton from "../custom-button/custom-button.component";
import CartItem from "../cart-item/cart-item.component";

import { selectCartItem } from "../../redux/cart/cart.selectors";
import { toggleCartHidden } from "../../redux/cart/cart.actions";

import { DropdownContainer, CartItemsContainer, EmptyContainer } from "./cart-dropdown.styles";



const CartDropdown = ({ cartItems, dispatch }) => {

    let navigate = useNavigate();

    return (
        <DropdownContainer>
            <CartItemsContainer>
                {
                    cartItems.length ? (
                        cartItems.map(
                            cartItem => (
                                <CartItem key={cartItem.id} item={cartItem} />
                            )
                        )
                    ) :
                        <EmptyContainer>Your cart is empty</EmptyContainer>
                }
            </CartItemsContainer>

            <CustomButton onClick={() => {
                navigate("/checkout");
                dispatch(toggleCartHidden())
            }}>GO TO CHECKOUT</CustomButton>
        </DropdownContainer>
    )
}


const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItem
})

export default connect(mapStateToProps)(CartDropdown);