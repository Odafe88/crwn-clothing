import React from "react";

import { MenuItemContainer, BackgroundImageContainer, ContentTitle, ContentContainer, ContentSubtitle } from "./menu-item.styles";

import { useNavigate, useHref } from 'react-router-dom'



function MenuItem({ title, imageUrl, size, linkUrl }) {
    const navigate = useNavigate();
    return (
        <MenuItemContainer size={size} onClick={() => { navigate(linkUrl) }}>
            <BackgroundImageContainer className='background-image' imageUrl={imageUrl} />
            <ContentContainer className='content'>
                <ContentTitle>{title.toUpperCase()}</ContentTitle>
                <ContentSubtitle>SHOP NOW</ContentSubtitle>
            </ContentContainer>
        </MenuItemContainer>
    )
}

// onClick={() => {navigate(linkUrl)}}

export default MenuItem;