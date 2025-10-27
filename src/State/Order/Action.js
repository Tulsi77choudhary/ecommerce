import {
    CREATE_ORDER_FAILURE,
    CREATE_ORDER_REQUEST,
    CREATE_ORDER_SUCCESS,
    GET_ORDER_BY_ID_REQUEST,
    GET_ORDER_BY_ID_SUCCESS,
    GET_ORDER_BY_ID_FAILURE,
} from "./ActionType";
    import { api } from "../../config/apiConfig";

export const createOrder = (reqData, navigate) => async (dispatch) => {
    dispatch({ type: CREATE_ORDER_REQUEST });
    try {
        const token = localStorage.getItem('token');

        const { data } = await api.post(
            `/api/orders/order`,
            reqData.address,
            {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`,
                },
            }
        );
        console.log("tu--------",data);
        

       
        if (data?.id && navigate) {
            navigate(`/checkout/${data.id}`);
        }

        dispatch({ type: CREATE_ORDER_SUCCESS, payload: data });
    } catch (error) {
        dispatch({ type: CREATE_ORDER_FAILURE, payload: error.response?.data || error.message });
    }
};


export const getOrderById = (orderId) => async (dispatch) => {
    try {
        dispatch({ type: GET_ORDER_BY_ID_REQUEST });
        const token = localStorage.getItem('token');

        const { data } = await api.get(`/api/orders/${orderId}`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });

        dispatch({
            type: GET_ORDER_BY_ID_SUCCESS,
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: GET_ORDER_BY_ID_FAILURE,
            payload: error.response?.data || error.message,
        });
    }
};
