import React from 'react';

import CollectionItem from '../collection-items/collection-item.component';

import { PreviewTitle, PreviewContainer, Preview } from './collection-preview.styles';


const CollectionPreview = ({ title, items }) => (
    <PreviewContainer>
        <PreviewTitle>{title.toUpperCase()}</PreviewTitle>
        <Preview>
            {
                items.filter((item, idx) => idx < 4)
                    .map(item => (
                        <CollectionItem key={item.id} item={item} />
                    ))
            }
        </Preview>
    </PreviewContainer>
)


export default CollectionPreview;

