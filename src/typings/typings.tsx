export interface ShopProps {
  products: {
    id: number;
    brand: string;
    category: string;
    description: string;
    discountPercentage: number;
    images: string[];
    price: number;
    rating: number;
    stock: number;
    thumbnail: string;
    title: string;
    quantity?: number;
    bookMarkValue?: boolean;
  }[];
}

export interface singleProduct {
  id: number;
  brand: string;
  category: string;
  description: string;
  discountPercentage: number;
  images: string[];
  price: number;
  rating: number;
  stock: number;
  thumbnail: string;
  title: string;
  quantity?: number;
  addCart: (value: number) => void;
  cart: ShopProps["products"];
  addedToCart: string;
  addBookMark: (value: number) => void;
  setBookMarkModel: (value: boolean) => void;
  bookMarkValue?: boolean;
  bookMarkCart: ShopProps["products"];
}
