import CartItem from "./CartItem.tsx";
import "../styles/Cart.css";
import { CartProps } from "../utils/props.ts";
import { useState } from "react";

function Cart({ items, clearCart }: CartProps) {
  const [minimized, setMinimized] = useState(true);

  const toggleMinimized = () => {
    setMinimized(!minimized);
  };

  const isEmpty = items.length === 0;

  return (
    <>
      <div className={`cart-container ${minimized ? "minimized" : ""}`}>
        <button className="minimize-btn" onClick={toggleMinimized}>
          <div className="img-div">
            <img src="/SVG/bag.svg" alt="bag" />
          </div>
        </button>

        {!minimized && (
          <>
            {isEmpty ? (
              <div className="empty-message">Your cart is empty.</div>
            ) : (
              <>
                <table className="cart-item-table">
                  {items.map((item, i) => (
                    <tr key={i} className="cart-item">
                      <CartItem item={item} />
                    </tr>
                  ))}
                </table>
                <div className="cart-bottom-row">
                  <button className="clear-cart-btn" onClick={clearCart}>
                    Clear
                  </button>
                </div>
              </>
            )}
          </>
        )}
      </div>
    </>
  );
}

export default Cart;
