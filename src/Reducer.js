// building application level code (states and state-changing actions)
export const initialState = {
    cart: [],
};

// selector
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
    }
}

export default reducer;