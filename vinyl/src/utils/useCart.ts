import { useEffect, useState } from "react";
import { CartItem } from "../utils/models.ts";

export default function useCart(key: string = "myArray") {
  // 🟡 Initialize state from localStorage immediately (synchronously)
  const [items, setItems] = useState<CartItem[]>(() => {
    try {
      const stored = localStorage.getItem(key);
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(items));
  }, [items, key]);

  const addItem = (item: CartItem) => {
    setItems((prevItems) => {
    const existingIndex = prevItems.findIndex(i => i.name === item.name);

    if (existingIndex !== -1) {
      const updatedItems = [...prevItems];
      updatedItems[existingIndex] = {
        ...updatedItems[existingIndex],
        amount: updatedItems[existingIndex].amount + 1
      };
      return updatedItems;
    }

    return [...prevItems, { ...item, amount: 1 }];
  });
  };

  const clearCart = () => {
    setItems([]);
  };

  return { items, addItem, clearCart };
}
