export interface ProductAPI {
  id: number;
  title: string;
  price: number;
  description: string;
  category?: string;
  image?: string;
  rating?: { rate: number; count: number };
}

export type ProductId = number | string;

export interface Product extends ProductAPI {
  liked?: boolean;
  isLocal?: boolean;
  createdAt?: string;
}
