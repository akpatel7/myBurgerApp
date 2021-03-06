import * as actionTypes from './../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
    orders: [],
    loading: false,
    purchased: false
};

const purchaseInit = (state, action) => updateObject(state, { purchased: false });

const purchaseBurgerStart = (state, action) => updateObject(state, { loading: true});

const purchaseBurgerSuccess = (state, action) => {
    const newOrder = updateObject(action.data, { id: action.orderId });
        return updateObject(state, {
            loading: false,
            purchased: true,
            orders: state.orders.concat(newOrder)
        });
};

const purchaseBurgerFail = (state, action) => updateObject(state, {  
        loading: false,
        error: true
    });

const fetchOrderStart = (state, action) => updateObject(state, {  
    loading: true
});

const fetchOrderSuccess = (state, action) => updateObject(state, {  
    orders: action.orders,
    loading: false
});

const fetchOrderFail = (state, action) => updateObject(state, {  
    orders: [],
    loading: false
});

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.PURCHASE_INIT: return purchaseInit(state, action);
        case actionTypes.PURCHASE_BURGER_START: return purchaseBurgerStart(state, action);
        case actionTypes.PURCHASE_BURGER_SUCCESS: return purchaseBurgerSuccess(state, action);
        case actionTypes.PURCHASE_BURGER_FAIL: return purchaseBurgerFail(state, action);
        case actionTypes.FETCH_ORDERS_START: return fetchOrderStart(state, action);
        case actionTypes.FETCH_ORDERS_SUCCESS: return fetchOrderSuccess(state, action);
        case actionTypes.FETCH_ORDERS_FAIL: return fetchOrderFail(state, action);
        default: return state;    
    }
};

export default reducer;