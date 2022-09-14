import { CART_ADD_ITEM, CART_REMOVE_ITEM } from "../constants/cartConstant";

export const cartReducer = (state = { cartItems: [] }, action) => {
    switch (action.type) {
        case CART_ADD_ITEM:
            const item = action.payload

            const existItem = state.cartItems.find(dt => dt.product === item.product)

            if (existItem) {
                return {
                    ...state,
                    cartItems: state.cartItems.map(dt => dt.product === existItem.product ? item : dt)
                }
            } else {
                return {
                    ...state,
                    cartItems: [...state.cartItems, item]
                }
            }
        case CART_REMOVE_ITEM:
            return {
                ...state,
                cartItems: state.cartItems.filter(dt => dt.product !== action.payload)
            }
        default:
            return state
    }
}