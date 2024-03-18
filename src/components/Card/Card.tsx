import { Clothes } from 'types/clothes.interface';
import styles from './Card.module.css';
import Button from '../UI/Button/Button';
import FeaturedImage from '../UI/FeaturedImage/FeaturedImage';

interface CardProps {
  product: Clothes;
}

export function Card({ product }: CardProps) {
  const {
    title,
    colors,
    productImage,
    hasDiscount,
    priceEur,
    originalPriceEur,
    discountPercentage,
  } = product;

  return (
    <div className={styles.container}>
      <div className={styles.productImageContainer}>
        <FeaturedImage className={styles.image} src={productImage} layout="fill" alt={title} />
      </div>
      <div className={styles.productInfoContainer}>
        <p className={`small ${styles.productTitle}`}>{title}</p>
        <div className={styles.productPriceContainer}>
          {hasDiscount && (
            <span className={`${styles.productPrice} ${styles.originalPrice}`}>
              {originalPriceEur}
            </span>
          )}
          <span className={`${styles.productPrice} ${hasDiscount && styles.productPriceDiscount}`}>
            {priceEur}
            {hasDiscount && `(${discountPercentage})`}
          </span>
        </div>
        <p className={styles.moreColors}>{colors.length > 0 && 'más colores'}</p>
        <Button onClick={() => undefined} variant="primary">
          <p>AÑADIR</p>
        </Button>
      </div>
    </div>
  );
}
