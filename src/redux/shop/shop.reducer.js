import SHOP_DATA from "./shop.data";

const INIIAL_STATE = {
    collections: SHOP_DATA
}

const shopReducer = (state = INIIAL_STATE, action) => {
    switch (action.type) {
        default:
            return state;
    }
}


export default shopReducer;