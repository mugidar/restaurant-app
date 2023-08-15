export type Menu = {
  id: string;
  slug: string
  title: string;
  description?: string
  color: string
  image?: string
};

export type Product = {
  id: string;
  title: string;
  description?: string
  image?: string
  price: number
  options?: {title: string; additionalPrice: number}
};
