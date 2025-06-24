import { CartItemProps } from "../utils/props";

function CartItem({ item }: CartItemProps) {
  return (
    <>
      <td className="first-column">{item.name}</td>
      <td className="second-column">{item.amount}</td>
      <td>${item.price}</td>
    </>
  );
}

export default CartItem;
