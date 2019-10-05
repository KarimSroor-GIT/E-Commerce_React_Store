import React from 'react';
import './header.component.scss';
import {Link} from 'react-router-dom';
import {auth} from '../../firebase/firebase.utils';
import {ReactComponent as Logo} from  '../../assets/crown.svg';
import {connect} from 'react-redux';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';

const Header = ({currentUser,hidden})=> (

  <div className = 'header'>
    <Link className='logo-container' to="/"> 
    <Logo className='logo'/>
    </Link>
    <div className = 'options'>
    <Link className ='option' to='/shop'>Shop</Link>
    <Link className ='option' to='/contact'>Contact</Link>
   {

    currentUser?
    (
      <div className='option' onClick= {()=>{auth.signOut()}}> Sign Out</div>
    ):
    (
      <Link className ='option' to='/SignIn'>Sign In</Link>
    )
  }
  <CartIcon/>
    </div>
    {
       hidden? null : <CartDropdown/>
    }
  </div>


);
/*  
  older syntax 
  ----------------------------------------
const mapStateToprops = state=>({
  currentUser : state.user.currentUser
*/
  const mapStateToprops = ({user:{currentUser},cart:{hidden}}) =>({
   currentUser,
    hidden
});

export default  connect(mapStateToprops)(Header); 