import React from 'react';
import './sign-in.styles.scss';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import {auth,signInWithGoogle} from '../../firebase/firebase.utils';

class SignIn extends React.Component
{
 constructor (props) 
 {
    super(props);

      this.state = 
      {
        email:'',
        password:''

      }

 }
handleSubmit = async  (event)=> {
  event.preventDefault();
  const {email,password} = this.state;
  
  try {
    await auth.signInWithEmailAndPassword(email,password);
    this.setState ({email:'',password:''});
  }catch (err){
    console.log('error on user sign in with email and password'+err);
  }
  
}

handleOnChange = (event)=>{
const {value , name} = event.target;
this.setState({[name]:value});
}

render () { return (

<div className='sign-in'>
<h2>I already have an account</h2>
<span>Sign in with your email address</span>

     <form onSubmit={this.handleSubmit}>
     
      <FormInput name='email' type='email' value={this.state.email} required label="email"
      handleOnChange = {this.handleOnChange}/>

      <FormInput name='password' type='password' value={this.state.password}  required label="password"
      handleOnChange= {this.handleOnChange}/>

      <div className="buttons">
      <CustomButton type='submit' onClick={this.handleSubmit}>Sign In </CustomButton>
      <CustomButton onClick = {signInWithGoogle} isGoogleSignIn={true}>
      Sign In with Google 
      </CustomButton>
      </div>
     </form>


</div>
)}

}

export default SignIn;