export interface Product {
  idSP: number;
  name: string;
  price: number;
  stockQuantity: number;
  category: string;
  imageUrl: string;
  size?: string;
  color?: string;
  description?: string;
  startTB?: number;
}
