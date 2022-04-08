import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectCollections } from '../../redux/shop/shop.selectors';

import { OverviewContainer } from './collection-overview.styles';

import CollectionPreview from '../collection-preview/collection-preview.component';


const CollectionOverview = ({ collections }) => (
    <OverviewContainer>
        {
            collections.map(({ id, ...otherProps }) => (
                <CollectionPreview key={id} {...otherProps} />
            ))
        }

    </OverviewContainer>
)

const mapStateToProps = createStructuredSelector({
    collections: selectCollections
})


export default connect(mapStateToProps)(CollectionOverview)