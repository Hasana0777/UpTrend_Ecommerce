import React, { useContext } from 'react'
import './CartItems.css'
import { ShopContext } from '../../Context/ShopContext'
import remove_icon from '../Assets/cart_cross_icon.png'

const CartItems = () => {

    const {all_product,cartItems,removeFromCart,TotalCartAmount} = useContext(ShopContext)
  return (
    <div className="cartitems">

<div className="cartitems-format-main">
           <p>Products</p>
           <p>Title</p>
           <p>Price</p>
           <p>Quantity</p>
           <p>Total</p>
           <p>Remove</p>
</div>

<hr />
  {all_product.map((e) => {
    if(cartItems[e.id] > 0)
        {
        return  <div>
    <div className='ct-format cartitems-format-main'>
        <img src={e.image} alt=" " className='ct-pr-icon'/>
        <p>{e.name}</p>
        <p>${e.new_price}</p>
        <button className='ct-quantity'>{cartItems[e.id]}</button>
        <p>${e.new_price*cartItems[e.id]}</p>
      
        <img  className='cart-rem'src={remove_icon} onClick={() => {removeFromCart(e.id)}} alt=" "/>
    </div>
    <hr />
</div>
        }
        return null;
  })}
  <div className="cart-down">
    <div className="total">
        <h1>Cart Total</h1>
        <div>
            <div className="cart-total-items">
                <p>SUB TOTAL</p>
                <p>${TotalCartAmount()}</p>
            </div>
            <hr/>
            <div className="cart-total-items">
                <p>Shipping fee</p>
                <p>Fryee</p>
            </div>
            <hr />
            <div className="cart-total-items">
                <h3>Total</h3>
                <h3>${TotalCartAmount()}</h3>
            </div>

    </div>
    <button>PROCEED TO CHECKOUT</button>
  </div>
  <div className="cart-promo">
    <p>If you have a promo code enter here</p>
    <div className="promo">
        <input type="text" placeholder='promo code'/>
        <button> Submit </button>

    </div>
    
  </div>

    </div>
    </div>
  )
}
export default CartItems
