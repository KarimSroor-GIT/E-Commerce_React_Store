import CartActionTypes from './cart.types';

export const toggleCartDisplay = ()=>({
type : CartActionTypes.TOGGLE_CART_Display
});

export const addItem = (item)=>({
type : CartActionTypes.ADD_ITEM,
payload: item
});