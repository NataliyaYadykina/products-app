import type { ProductAPI } from "@/types";

const BASE = "https://fakestoreapi.com";

export async function fetchProductsFromApi(): Promise<ProductAPI[]> {
  const res = await fetch(`${BASE}/products`);
  if (!res.ok) throw new Error("Failed to fetch products");
  return res.json();
}

export async function fetchProductByIdFromApi(id: number): Promise<ProductAPI> {
  const res = await fetch(`${BASE}/products/${id}`);
  if (!res.ok) throw new Error("Failed to fetch product");
  return res.json();
}
