
import ProductList from './ProductList';

const LatestProducts = ({ products }) => (
  <section className="latest-products">
    <h2>Our latest arrivals</h2>
    <ProductList products={products} />
  </section>
);

export default LatestProducts;
