import React from "react";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectCartItem, selectCartTotal } from "../../redux/cart/cart.selectors";
import { selectUserEmail, selectUserName } from "../../redux/user/user.selectors";

import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import Flutterwave from "../../components/flutterwave-component/flutterwave.component";

import {
    CheckoutPageContainer,
    CheckoutHeaderContainer,
    HeaderBlockContainer,
    TotalContainer
} from './checkout.styles';

const CheckoutPage = ({ cartItems, total, userEmail, name }) => (
    <CheckoutPageContainer>
        <CheckoutHeaderContainer>
            <HeaderBlockContainer>
                <span>Product</span>
            </HeaderBlockContainer>
            <HeaderBlockContainer>
                <span>Description</span>
            </HeaderBlockContainer>
            <HeaderBlockContainer>
                <span>Quantity</span>
            </HeaderBlockContainer>
            <HeaderBlockContainer>
                <span>Price</span>
            </HeaderBlockContainer>
            <HeaderBlockContainer>
                <span>Remove</span>
            </HeaderBlockContainer>
        </CheckoutHeaderContainer>
        {
            cartItems.map(cartItem =>
                <CheckoutItem cartItem={cartItem} />)
        }
        <TotalContainer>
            <span>TOTAL: &#8358;{total}</span>
        </TotalContainer>
        <Flutterwave name={name} email={userEmail} total={total} />
    </CheckoutPageContainer>
)

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItem,
    total: selectCartTotal,
    userEmail: selectUserEmail,
    name: selectUserName
})

export default connect(mapStateToProps)(CheckoutPage);