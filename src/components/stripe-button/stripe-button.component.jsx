import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const  StripeCheckoutButton = ({price}) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_o28Ej4Qk440CpmpuZIZzytTG00RQ08xBrA';

  const onToken = token=> {
    console.log(token);
    alert('payment successful');
  }
  return(
    <StripeCheckout
    label = 'Proceed to payment'
    name  =  'online Store'
    billingAddress
    shippingAddress
    description = {`Your total is $${price}`}
    amount = {priceForStripe}
    token = {onToken}
    stripeKey = {publishableKey}
    
    />
  )
}

export default  StripeCheckoutButton;