import  React from "react";
import './custom-button.styles.scss';

const CustomButton = ({children,isGoogleSignIn,inverted,...otherprops})=> (

<button className={`custom-button
   ${isGoogleSignIn? 'google-sign-in':''} 
   ${inverted? 'inverted':''}            
    `} 

  {...otherprops}>
  {children}
</button>
);

export default CustomButton;