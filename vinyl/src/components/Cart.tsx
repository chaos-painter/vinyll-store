import CartItem from "./CartItem.tsx";
import "../styles/Cart.css";
import { CartProps } from "../utils/props.ts";

function Cart({ items, clearCart }: CartProps) {
  return (
    <>
      <div className="cart-container">
        <ul className="cart-item-list">
          {items.map((item, i) => (
            <li key={i}>
              <CartItem item={item} />
            </li>
          ))}
        </ul>
        <button className="clear-cart-btn" onClick={clearCart}></button>
      </div>
    </>
  );
}

export default Cart;
