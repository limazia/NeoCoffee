export interface Product {
  name: string;
  description: string;
  price: number;
}

export interface MenuCategory {
  category: string;
  products: Product[];
}

export interface RenderRows {
  dataArray: MenuCategory[];
  component: React.FC<{ category: string; products: Product[] }>;
}
