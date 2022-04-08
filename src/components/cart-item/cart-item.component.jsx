import React from 'react';


import { ImageContainer, CartItemContainer, ItemName, ItemDetailsContainer } from './cart-item.styles';

const CartItem = ({ item: { imageUrl, price, name, quantity } }) => (
    <CartItemContainer>
        <ImageContainer src={imageUrl} alt='item' />
        <ItemDetailsContainer>
            <ItemName>{name}</ItemName>
            <span>
                {quantity} &#215; &#8358;{price}
            </span>
        </ItemDetailsContainer>
    </CartItemContainer>
)


export default CartItem;