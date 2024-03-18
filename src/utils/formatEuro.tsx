export default function formatEuro(price: string | number): string {
  const formatter = new Intl.NumberFormat('es-ES', { // Setting up a formatter that knows how to handle currency, specifically Euros
    style: 'currency',
    currency: 'EUR',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  if (!price) { // If the price is missing or zero, let's just return €0.00
    return formatter.format(0);
  }
  
  const parsedPrice = typeof price === 'string' ? parseFloat(price.replace(',', '.')) : price; // Replace commas with dots for decimal points, since some folks write numbers like 1,99 instead of 1.99

  return formatter.format(parsedPrice);
}
