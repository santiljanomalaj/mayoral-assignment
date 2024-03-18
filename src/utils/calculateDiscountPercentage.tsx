export default function calculateDiscountPercentage(
  price: string | number,
  originalPrice: string | number,
): string {
  const parsedPrice = typeof price === 'string' ? parseFloat(price) : price; // If someone types in a price, we'll convert it from text to a number
  const parsedComparedPrice = typeof originalPrice === 'string' ? parseFloat(originalPrice) : originalPrice;

  if (isNaN(parsedPrice) || isNaN(parsedComparedPrice) || parsedComparedPrice === 0) { // Avoid dividing by zero or dealing with non-number prices
    return '0%';
  }

  const discount = Math.trunc(((parsedPrice - parsedComparedPrice) / parsedComparedPrice) * 100);

  return `${discount}%`;
}
