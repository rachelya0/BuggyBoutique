import Product from "./Product";

// building application level code (states and state-changing actions)
export const initialState = {
    cart: [],
};

// selector
// get total amount that cart contains
// reduce function(accumulator, current item) increments amount with price
export const getCartTotal = (cart) => {
    return (cart?.reduce((amount, item) => item.price + amount, 0));
}

const reducer = (state, action) => {
    switch(action.type) {
        // add to cart functionality
        case "ADD_TO_CART":
            // return previous used state and change necessary parts (add items)
            return {
                ...state,
                // cart.length increases by 1 every time new item is added
                cart: [...state.cart, action.item],
            }
        case "REMOVE_FROM_CART":
            // need to find id of specific action, so not all items removed
            const index = state.cart.findIndex(
                (cartItem) => cartItem.id === action.id
            );

            // previous cart restored
            let newCart = [...state.cart]

            if (index >= 0) {
                // removes element and update cart
                newCart.splice(index, 1);
            }
            else {
                console.warn(
                    `Unable to remove Product(id: ${action.id}), not in cart`
                )
            }

            // return new object since dispatch() is immutable
            return {
                ...state,
                cart: newCart
            }
        default:
            return state;
    }
}

export default reducer;