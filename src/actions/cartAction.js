import axios from "axios"
import { CART_ADD_ITEM, CART_REMOVE_ITEM } from "../constants/cartConstant"

export const addToCart = (id, qty) => async (dispatch, getState) => {
     const { data } = await axios.get(`/api/products/${id}`)

     dispatch({
        type: CART_ADD_ITEM,
        payload: {
            product: data._id,
            name: data.title,
            image: data.imgs[0],
            price: data.price[0],
            stockItems: data.stockItems,
            qty
        }
     })
     
     localStorage.setItem('cartItems', JSON.stringify(getState()?.cart.cartItems))
}

export const removeCart = (id) => (dispatch, getState) => {
     
     dispatch({
          type: CART_REMOVE_ITEM,
          payload: id
     })

     localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems))
}