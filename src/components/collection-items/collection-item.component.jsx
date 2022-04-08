import React from 'react';
import CustomButton from '../custom-button/custom-button.component';

import { connect } from 'react-redux';
import { CollectionItemContainer, FooterContainer, ButtonContainer, ImageContainer, NameContainer, PriceContainer } from './collection-item.styles';

import './collection-item.styles.scss';
import { addItem } from '../../redux/cart/cart.actions';

const CollectionItem = ({ item, addItem }) => {

    const { name, price, imageUrl } = item;
    console.log(item)
    return (
        <CollectionItemContainer>
            <ImageContainer imageUrl={imageUrl} />
            <FooterContainer>
                <NameContainer>{name}</NameContainer>
                <PriceContainer>&#8358;{price}</PriceContainer>
            </FooterContainer>
            <ButtonContainer onClick={() => addItem(item)} inverted>Add to cart</ButtonContainer>
        </CollectionItemContainer>
    )
}


const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
})

export default connect(null, mapDispatchToProps)(CollectionItem);