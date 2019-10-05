import './App.css';
import React from 'react';
import {Switch,Route} from 'react-router-dom';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInSignUpPage from './pages/signIn_signUp/signIn_signUp.component';
import {createUserProfileDocument} from './firebase/firebase.utils';
import {auth} from './firebase/firebase.utils';
import {connect} from 'react-redux';
import {setCurrentUser} from './redux/user/user.action';

class App extends React.Component
{
  /*
  the constructor is removed since current user is nolonger stored in componnet state 
  current user is now being retrived from redux state store via calling 
  the setCurrentState func on user.action under user reducer
  ----------------------------------------------------------------------------------
  constructor ()
  { 
    super();
    this.state = {
      currentUser : null 
    }
  }
  */
   unsubscribeFromAuth = null ;

  componentDidMount(){
   this.unsubscribeFromAuth =  auth.onAuthStateChanged ( async userAuth => 
      {
        if (userAuth)
        {
          const {setCurrentUser} = this.props;
          const userRef = await createUserProfileDocument(userAuth);
          userRef.onSnapshot (snapShot => 
            {
                setCurrentUser({
                id:snapShot.id,
                ...snapShot.data()
            }
            , // call back function after execution of setstate will log state to console
            ()=>{console.log(this.state)}
            );
          })
        }
        setCurrentUser(userAuth);
      });
  }
  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }


  render (){
    return (
      <div>
     { 
       /*
       header component modifed to read state from redux state store [root reducer]
       instead reading it  from local component state 
       <Header currentUser={this.state.currentUser}/> */
    }

      <Header/>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop/' component={ShopPage} />
        <Route path='/Signin/' component={SignInSignUpPage} />
      </Switch>
    </div>
  
  
    );
  }
}


const mapDispatchToProps  = dispatch => ({
  setCurrentUser:user => dispatch(setCurrentUser(user))
});

export default connect (null,mapDispatchToProps)(App);
//export default App;
