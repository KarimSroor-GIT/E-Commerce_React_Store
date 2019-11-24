import React from 'react';
import  './checkout-item.styles.scss';
import {connect} from 'react-redux';
import {clearCartItem} from '../../redux/cart/cart.actions'
import {addItem} from '../../redux/cart/cart.actions'
import {removeItem} from '../../redux/cart/cart.actions'

const CheckoutItem = ({CartItem,clearItem,addItem,removeItem}) =>
(
  <div className = 'checkout-item'>
  <div className = 'image-container'>
  <img  src= {CartItem.imageUrl} alt = 'Item'/>
  </div>

  <span className='name'>{CartItem.name}</span>

  <span className='quantity'>
  <div className='arrow' onClick= {()=> removeItem(CartItem)}>&#10094;</div>
  <span className='value'>{CartItem.quantity}</span>
  <div className='arrow' onClick = {() => addItem(CartItem)}>&#10095;</div>
  </span>

  <span className='price'>{CartItem.price}</span>
  <div className='remove-button' onClick={ () => clearItem(CartItem)}> &#10005;</div>
  </div>
)

const mapDispatchToProps = dispatch =>({ 
  clearItem: item => dispatch(clearCartItem(item)),
  addItem : item => dispatch( addItem(item)),
  removeItem : item =>dispatch (removeItem(item))
})
export default connect (null,mapDispatchToProps)(CheckoutItem);