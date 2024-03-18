import { Card } from '../../components/Card/Card';
import NotFound from './NotFound/NotFound';

import { Clothes } from 'types/clothes.interface';

import styles from './ProductGrid.module.css';

interface GridParams {
  products: Clothes[];
  zoomIn: boolean;
}

export function ProductGrid(params: GridParams) {
  if (params.products.length === 0) {
    return <NotFound />;
  }
  
  return (
    <div
      className={`${styles.gridContainer} ${params.zoomIn ? styles.gridSizeZoomIn : styles.gridSizeZoomOut}`}
      data-testid="product-grid"
    >
      {params.products.map((product) => <Card key={product.id} product={product} />)}
    </div>
  );
}
