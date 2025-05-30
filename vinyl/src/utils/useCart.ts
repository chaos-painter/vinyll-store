import { useEffect, useState } from "react";
import { CartItem } from "./models.ts";

export default function useCart(key: string = "myArray") {
  const [items, setItems] = useState<CartItem[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem(key);
    if (stored) {
      try {
        const parsed = JSON.parse(stored);
        if (Array.isArray(parsed)) {
          setItems(parsed);
        }
      } catch (error) {
        console.error("Failed to parse localStorage:", error);
      }
    }
  }, [key]);

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(items));
  }, [items, key]);

  const addItem = (item: CartItem) => {
    setItems((prev) => [...prev, item]);
  };

  const clearCart = () => {
    setItems([]);
  };

  return { items, addItem, clearCart };
}
