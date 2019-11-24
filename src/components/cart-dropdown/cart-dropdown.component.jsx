import React from 'react';
import CustomButton from '../custom-button/custom-button.component';
import './cart-dropdown.styles.scss';
import CartItem from '../cart-item/cart-item.component';
import {connect} from 'react-redux'
import {selectCartItems} from  '../../redux/cart/cart.selectors.js';
import { toggleCartDisplay} from '../../redux/cart/cart.actions';
import {withRouter} from 'react-router-dom';

const CartDropDown = ({cartItems,history,dispatch})=>(
<div className='cart-dropdown'>

<div className='cart-items'>
{
  cartItems.length ?  //checking length to find if cart has items or empty
  //if true display / render cart Items
  (
cartItems.map(cartItem =>(
  <CartItem key={cartItem.id} item={cartItem}></CartItem> ))
  )
  //if cartitems length is zero display cart is empty message
  :
  (
    <span className='empty-message'>Cart is Empty</span>
  )
}
<CustomButton onClick={()=>{
  history.push('/checkout');
  dispatch(toggleCartDisplay());
}} >Go To CheckOut</CustomButton>
  
</div>

</div>
)

const mapPropsToState = (state)=>({
  cartItems :selectCartItems(state)
});

export default withRouter(connect(mapPropsToState) (CartDropDown));

