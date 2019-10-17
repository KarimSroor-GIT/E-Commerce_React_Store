import React from 'react';
import './cart-item.styles.scss';

const CartItem = ({item:{imageUrl,price,name,quantity}})=>(
<div className='cart-item'>
<img alt='Cart Item' src={imageUrl}></img>
<div className= 'item-details'>
<span className='name'>{name}</span>
<span className='price'>{price}$ * {quantity}</span>
</div> 
</div>

)

export default CartItem;