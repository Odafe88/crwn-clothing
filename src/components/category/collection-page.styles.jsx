import styled from "styled-components";

export const CollectionPageContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 20px;

    @media screen and (max-width: 800px) {
        padding: 10px;
    }
`;

export const TitleContainer = styled.h2`
    font-size: 38px;
    margin: 0 auto 30px;

    @media screen and (max-width: 400px) {
        font-size: 28px;
        border-bottom: 1px solid grey;
    }
`

export const ItemsContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 10px;

    @media screen and (max-width: 800px) {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
`

