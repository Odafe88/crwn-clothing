import React from "react";

import { CartIconContainer, ItemCount, ShoppingIconContainer } from './cart-icon.styles'

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";


import { toggleCartHidden } from '../../redux/cart/cart.actions';

import { selectCartItemsCount } from "../../redux/cart/cart.selectors";

const CartIcon = ({ toggleCartHidden, itemsCount }) => (
    <CartIconContainer onClick={toggleCartHidden}>
        <ShoppingIconContainer />
        <ItemCount className="item-count">{itemsCount}</ItemCount>
    </CartIconContainer>
)

const mapStateToProps = createStructuredSelector({
    itemsCount: selectCartItemsCount
})


const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
})

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);