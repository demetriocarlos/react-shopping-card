import { useContext } from "react"
import { CartContext } from "../Contexts/ShoppingCartContext"
 

 

export const ShoppingCart = () => {
  const [cart, setCart] = useContext(CartContext)

  const quantity = cart.reduce((acc, curr)  => {
    return acc + curr.quantity
 },0)

const totalPrice = cart.reduce((acc, curr) => {
    return acc + curr.quantity * curr.price ;
},0)

 

  return (
    <div className="cart-container">
      <div className="cart-contenido">
          <div>Items in cart: {quantity}</div>
          <br />
          <div> Total: ${totalPrice}</div>
          <br />
          <button className="btn" onClick={() => console.log(cart)}> Checkout</button>
      </div> 
       
    </div>
  )
}
