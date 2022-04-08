import React from "react";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectCartItem, selectCartTotal } from "../../redux/cart/cart.selectors";
import { selectUserEmail, selectUserName } from "../../redux/user/user.selectors";

import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import Flutterwave from "../../components/flutterwave-component/flutterwave.component";

import './checkout.styles.scss';

const CheckoutPage = ({ cartItems, total, userEmail, name }) => (
    <div className="checkout-page">
        <div className="checkout-header">
            <div className="header-block">
                <span>Product</span>
            </div>
            <div className="header-block">
                <span>Description</span>
            </div>
            <div className="header-block">
                <span>Quantity</span>
            </div>
            <div className="header-block">
                <span>Price</span>
            </div>
            <div className="header-block">
                <span>Remove</span>
            </div>
        </div>
        {
            cartItems.map(cartItem =>
                <CheckoutItem cartItem={cartItem} />)
        }
        <div className="total">
            <span>TOTAL: &#8358;{total}</span>
        </div>
        <Flutterwave name={name} email={userEmail} total={total} />
    </div>
)

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItem,
    total: selectCartTotal,
    userEmail: selectUserEmail,
    name: selectUserName
})

export default connect(mapStateToProps)(CheckoutPage);