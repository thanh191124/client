// src/reducer/cartReducer.ts
import { ADD_TO_CART, REMOVE_FROM_CART, CLEAR_CART } from '../acction/acctiontype.ts';
import { Product } from '../acction/type.ts'; // Ensure the path is correct

interface CartState {
    items: Product[]; // Assuming items is an array of products
}

interface Action {
    type: string; // You can use an enum if you have multiple actions
    payload: any; // You can define payload more specifically if needed
}

const initialState: CartState = {
    items: JSON.parse(localStorage.getItem('cart') || '[]'), // Retrieve the cart from localStorage
};

const cartReducer = (state = initialState, action: Action): CartState => {
    switch (action.type) {
        case ADD_TO_CART:
            return {
                ...state,
                items: action.payload,
            };
        case REMOVE_FROM_CART:
            return {
                ...state,
                items: action.payload,
            };
        case CLEAR_CART:
            return {
                ...state,
                items: [], // Empty the cart when the action is dispatched
            };
        default:
            return state;
    }
};

export default cartReducer;
