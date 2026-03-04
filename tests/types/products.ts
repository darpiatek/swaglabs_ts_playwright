export interface ProductData {
  name: string;
  description: string;
  price: number;
}

export interface ProductsData {
  products: ProductData[];
}