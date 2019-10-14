export const addItemToCart =  (cartItems, cartItemToAdd) => 
{
  
 const existingCartItem = cartItems.find(
   cartItem => (cartItem.id === cartItemToAdd.id  && cartItem.name === cartItemToAdd.name)
   );

   if (existingCartItem)
   {
     return cartItems.map(
      cartItem => (cartItem.id === cartItemToAdd.id && cartItem.name === cartItemToAdd.name)
      ? {...cartItem ,quantity: cartItem.quantity+1}
      : {cartItem}
     );
   }


return [...cartItems, { ...cartItemToAdd, quantity: 1 }];

};

export default addItemToCart;

