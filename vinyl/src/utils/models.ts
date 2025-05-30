// Object models

interface CartItem {
  name: string;
  amount: number;
  price: number;
}

interface VinylItem {
  name: string;
  image: string;
}

export type { CartItem, VinylItem };
