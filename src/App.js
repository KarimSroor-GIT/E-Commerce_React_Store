import './App.css';
import React from 'react';
import {Switch,Route} from 'react-router-dom';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInSignUpPage from './pages/signIn_signUp/signIn_signUp.component';
import {createUserProfileDocument} from './firebase/firebase.utils';
import {auth} from './firebase/firebase.utils';

class App extends React.Component
{
  constructor ()
  { 
    super();
    this.state = {
      currentUser : null 
    }
  }
   unsubscribeFromAuth = null ;

  componentDidMount(){
   this.unsubscribeFromAuth =  auth.onAuthStateChanged ( async userAuth => 
      {
        if (userAuth)
        {
          const userRef = await createUserProfileDocument(userAuth);
          userRef.onSnapshot (snapShot => {
            this.setState ({
              currentUser: {
                id:snapShot.id,
                ...snapShot.data()
              }
            }
            , // call back function after execution of setstate will log state to console
            ()=>{console.log(this.state)}
            );
          })
        }
        this.setState ({currentUser: userAuth});

      });
  }
  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }


  render (){
    return (
      <div>
      <Header currentUser={this.state.currentUser}/>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop/' component={ShopPage} />
        <Route path='/Signin/' component={SignInSignUpPage} />
      </Switch>
    </div>
  
  
    );
  }
}


 

export default App;
//export default App;
