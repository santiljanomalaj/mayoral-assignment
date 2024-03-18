export interface Clothes {
  id: number;
  title: string;
  price: number;
  priceEur: string;
  originalPriceEur: string;
  originalPrice: number;
  hasDiscount: boolean;
  colors: string[];
  discountPercentage: string;
  productImage: string;
}
