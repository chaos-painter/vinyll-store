import { CartItem, VinylItem } from "./models.ts"

interface VinylProps {
  img: string;
  title?: string;
  year?: number;
  onClick?: () => void;
}

interface CartItemProps {
  item: CartItem;
}

interface ShelfProps {
  addItem: (item: CartItem) => void;
  shelves: VinylItem[][];
}

interface CartProps {
  items: CartItem[];
  clearCart: () => void;
}

export type { VinylProps, CartItemProps, ShelfProps, CartProps };
