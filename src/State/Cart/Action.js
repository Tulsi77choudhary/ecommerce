import { api } from "../../config/apiConfig"
import {
  ADD_ITEM_TO_CART_REQUEST,
  ADD_ITEM_TO_CART_SUCCESS,
  ADD_ITEM_TO_CART_FAILURE,
  GET_CART_REQUEST,
  GET_CART_SUCCESS,
  GET_CART_FAILURE,
  REMOVE_CART_ITEM_REQUEST,
  REMOVE_CART_ITEM_SUCCESS,
  REMOVE_CART_ITEM_FAILURE,
  UPDATE_CART_ITEM_REQUEST,
  UPDATE_CART_ITEM_SUCCESS,
  UPDATE_CART_ITEM_FAILURE,
} from './ActionType';


export const getCart = () => async (dispatch) => {
    dispatch({ type: GET_CART_REQUEST });

    const userId = localStorage.getItem("userId");

    if (!userId) {
        dispatch({ type: GET_CART_FAILURE, payload: "User ID not found" });
        return;
    }

    try {
        const { data } = await api.get(`/cart/${userId}`);
        dispatch({ type: GET_CART_SUCCESS, payload: data });
    } catch (error) {
        dispatch({ type: GET_CART_FAILURE, payload: error.message });
    }
};


export const addItemToCart = (reqData, userId) => async (dispatch) => {
    dispatch({ type: ADD_ITEM_TO_CART_REQUEST })

    try {
        const { data } = await api.post(`/cart/${userId}/add`, reqData)
        console.log("Add to cart response data:", data);

        dispatch({ type: ADD_ITEM_TO_CART_SUCCESS, payload: data })
        dispatch(getCart());
    } catch (error) {
        dispatch({ type: ADD_ITEM_TO_CART_FAILURE, payload: error.message })
    }
}

export const removeItemToCart = (cartItemId,userId) => async (dispatch) => {
    dispatch({type: REMOVE_CART_ITEM_REQUEST })

    try {
        const { data } = await api.delete(`/cart/${userId}/${cartItemId}`);
        dispatch({ type: REMOVE_CART_ITEM_SUCCESS, payload: cartItemId })
        dispatch(getCart(userId));
    } catch (error) {
        dispatch({ type: REMOVE_CART_ITEM_FAILURE, payload: error.message })
    }
}

export const updateItemToCart = ({cartItemId,userId,quantity}) => async (dispatch) => {
    dispatch({ type: UPDATE_CART_ITEM_REQUEST })

    try {
        const { data } = await api.put(`/cart/update/${cartItemId}/${userId}`, { quantity })
        dispatch({ type: UPDATE_CART_ITEM_SUCCESS, payload: data })
        dispatch(getCart());
    } catch (error) {
        dispatch({ type: UPDATE_CART_ITEM_FAILURE, payload: error.message })
    }
}