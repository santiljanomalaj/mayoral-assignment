import { GetServerSideProps, NextPage } from 'next';
import { useState } from 'react';

import Header from '../components/Header/Header';
import { ProductGrid } from '../components/ProductGrid/ProductGrid';
import SearchBar from '../components/SearchBar/SearchBar';
import ZoomButtons from '../components/ZoomButtons/ZoomButtons';
import Filters from '../components/Filters/Filters';

import { fetchAllProducts, searchProducts } from '../utils/products';

import { Clothes } from '../types/clothes.interface';


interface HomeProps {
  products: Clothes[];
}

const HomePage: NextPage<HomeProps> = ({ products = [] }) => {
  const [zoomIn, setZoomIn] = useState(true);

  return (
    <div>
      <Header>
        <SearchBar />
        <ZoomButtons
          onZoomIn={() => {
            !zoomIn && setZoomIn(true);
          }}
          onZoomOut={() => {
            zoomIn && setZoomIn(false);
          }}
          isZoomEnabled={zoomIn}
        />
      </Header>
      <Filters />
      <ProductGrid products={products} zoomIn={zoomIn} />
    </div>
  );
};

export default HomePage;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const searchParams = context.query;

  try {
    const products = searchParams.toString()
      ? await searchProducts(searchParams)
      : await fetchAllProducts();
    return { props: { products } };
  } catch (e) {
    return { props: { products: [] } };
  }
};
