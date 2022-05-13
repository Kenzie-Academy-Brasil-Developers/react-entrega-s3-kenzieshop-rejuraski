const defaultState = JSON.parse(localStorage.getItem("@kenzie_shop:cart")) || [];

const cartReducer = (state = defaultState, action) => {
    const { product } = action;

    switch (action.type) {
        case "@cart/ADD":
            return [...state, product];
        case "@cart/REMOVE":
            // return state.filter(p => p.id !== product.id);
            return [...action.product];
        default:
            return state;
    }
};

export default cartReducer;