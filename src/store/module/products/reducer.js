import Products from "../../../database/db";

const defaultState = Products;
const productReducer = (state = defaultState, action) => {
    switch (action.type) {
        default:
            return state;
    }
}

export default productReducer;