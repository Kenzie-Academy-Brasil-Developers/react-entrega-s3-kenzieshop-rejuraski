import { addProduct } from "./actions";
import { removeProduct } from "./actions";

export const addToCartThunk = (product) => (dispatch) => {
    const cart = JSON.parse(localStorage.getItem("@kenzie_shop:cart")) || [];

    const newCart = [...cart, product];

    localStorage.setItem("@kenzie_shop:cart", JSON.stringify(newCart));

    dispatch(addProduct(product));
};

export const removeToCartThunk = (product) => (dispatch) => {
    const cart = JSON.parse(localStorage.getItem("@kenzie_shop:cart")) || [];

    const newCart = cart.findIndex(p => p.id === product.id);
    cart.splice(newCart, 1);
    dispatch(removeProduct(cart));

    localStorage.setItem("@kenzie_shop:cart", JSON.stringify(cart));


};