import React from 'react';
import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg';
import './cart-icon.styles.scss';
import {connect} from 'react-redux';
import {toggleCartDisplay} from '../../redux/cart/cart.action.js';

const CartIcon = ({toggleCartDisplay})=>(

<div  className='cart-icon' onClick = {toggleCartDisplay}>
<ShoppingIcon className='shopping-icon'></ShoppingIcon>
<span className='item-count'>0</span>
</div>

);

const mapDispatchToProps = dispatch =>({
  toggleCartDisplay :()=> dispatch(toggleCartDisplay())
});

export default connect (null,mapDispatchToProps)(CartIcon);
