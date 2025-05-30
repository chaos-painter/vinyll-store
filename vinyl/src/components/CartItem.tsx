import { CartItemProps } from "../utils/props";

function CartItem({ item }: CartItemProps) {
  return (
    <>
      <div className="cart-item">
        <span>{item.name}</span>
        <span>${item.price}</span>
      </div>
    </>
  );
}

export default CartItem;
