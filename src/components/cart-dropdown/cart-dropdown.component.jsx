import React from 'react';
import CustomButton from '../custom-button/custom-button.component';
import './cart-dropdown.styles.scss';
import CartItem from '../cart-item/cart-item.component';
import {connect} from 'react-redux'
import {selectCartItems} from  '../../redux/cart/cart.selectors.js';


const CartDropDown = ({cartItems})=>(
<div className='cart-dropdown'>

<div className='cart-items'>
{
cartItems.map(cartItem =>(
  <CartItem key={cartItem.id} item={cartItem}></CartItem>
  ))}
<CustomButton>Go To CheckOut</CustomButton>
</div>

</div>
)

const mapPropsToState = (state)=>({
  cartItems :selectCartItems(state)
});
export default connect(mapPropsToState) (CartDropDown);

