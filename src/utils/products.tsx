import formatEuro from './formatEuro';
import calculateDiscountPercentage from './calculateDiscountPercentage';
import { Clothes } from '../types/clothes.interface';
import { ParsedUrlQuery } from 'querystring';

const ASSET_URL = process.env.API_URL; // Setting up a base URL for fetching product data

export async function fetchProducts() { // Function to fetch all products from the API
  const res = await fetch(ASSET_URL);
  const data = (await res.json()) as Clothes[];
  return data;
}

export function mapProducts(products: Clothes[]) { // Function to reformat product data
  return products.map((product) => {
    const hasDiscount = product.originalPrice > product.price; // Checking if the product price is reduced

    return {
      id: product.id || null,
      title: product.title || '',
      price: product.price || 0,
      productImage: product.productImage || '',
      hasDiscount,
      priceEur: formatEuro(product.price), // Formatted product price in EUR
      originalPrice: product.originalPrice || 0,
      originalPriceEur: (product.originalPrice && formatEuro(product.originalPrice)) || '0', // Formatted compared price in EUR or zero
      discountPercentage: (hasDiscount && calculateDiscountPercentage(product.price, product.originalPrice)) || '', // Discount percentage if reduced, otherwise empty
      colors: product.colors || [],
    };
  });
}

export async function fetchAllProducts(): Promise<Clothes[]> { // Fetches all products and maps them
  const rawProducts = await fetchProducts();
  const products = mapProducts(rawProducts);
  return products;
}

export async function searchProducts(searchParams: ParsedUrlQuery): Promise<Clothes[]> { // Function to search products based on given parameters
  const query = (searchParams?.query as string) || '';
  const sort = (searchParams?.sort as string) || '';

  // Fetching and mapping products
  const rawProducts = await fetchProducts();
  const mappedProducts = mapProducts(rawProducts);

  // Filtering and sorting the products
  const filteredProducts = filterProducts(mappedProducts, query);
  const sortedProducts = sortProducts(filteredProducts, sort);

  return sortedProducts;
}

export function filterProducts(products: Clothes[], query: string): Clothes[] { // Function to filter products based on a search query
  if (!query) return products;

  return products.filter((product) => product.title.toLowerCase().includes(query.toLowerCase()));
}

export function sortProducts(products: Clothes[], sort: string) { // Function to sort products based on a sort parameter
  switch (sort) {
    case 'priceAsc':
      return products.sort((a, b) => a.price - b.price);
    case 'priceDesc':
      return products.sort((a, b) => b.price - a.price);
    default:
      return products;
  }
}
