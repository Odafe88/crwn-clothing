import styled from "styled-components";
import CustomButton from "../custom-button/custom-button.component";

export const ButtonContainer = styled(CustomButton)`
    width: 22%;
    position: absolute;
    top: 255px;
    opacity: 0;

    &:hover {
        opacity: 0.85;
        display: flex;
    }
`

export const CollectionItemContainer = styled.div`
    width: 22vw;
    display: flex;
    flex-direction: column;
    height: 350px;
    align-items: center;
    position: relative;
    margin-bottom: 10px;

`;

export const ImageContainer = styled.div`
    width: 100%;
    height: 95%;
    background: ${(props) => `url(${props.imageUrl})`};
    background-size: cover;
    background-position: center;
    margin-bottom: 5px;

    &:hover {
        opacity: 0.8;
    }
`;

export const FooterContainer = styled.div`
    width: 100%;
    height: 5%;
    display: flex;
    justify-content: space-between;
    font-size: 18px;
`;

export const NameContainer = styled.span`
    width: 60%;
    margin-bottom: 15px;
`;

export const PriceContainer = styled.span`
    width: 40%;
    text-align: right;
`