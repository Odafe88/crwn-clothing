import React from "react";

import { useSelector } from "react-redux";
import { CollectionPageContainer, TitleContainer, ItemsContainer } from "./collection-page.styles";

import { useParams } from "react-router-dom";

import CollectionItem from "../collection-items/collection-item.component";

import { selectCollection } from "../../redux/shop/shop.selectors";



const CollectionPage = () => {
    const params = useParams();
    const collection = useSelector((state) =>
        selectCollection(params.collectionId)(state)
    );

    const { title, items } = collection;
    console.log(collection)
    return (
        <CollectionPageContainer>
            <TitleContainer>{title}</TitleContainer >
            <ItemsContainer>
                {
                    items.map(item => (
                        <CollectionItem key={item.id} item={item} />
                    ))
                }
            </ItemsContainer>

        </CollectionPageContainer>
    );
};

// const mapStateToProps = (state, ownProps) => ({
//     collection: selectCollectionItem(ownProps.params.collectionId)(state),
// });


export default CollectionPage;