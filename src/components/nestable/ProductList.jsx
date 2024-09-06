
const ProductList = ({ products }) => (
  <section className="product-list">
    {products.map(product => (
      <div key={product.id} className="product-card">
        <img src={product.content.image} alt={product.content.name} />
        <h3>{product.content.name}</h3>
        <p>{product.content.price}</p>
      </div>
    ))}
  </section>
);

export default ProductList;
