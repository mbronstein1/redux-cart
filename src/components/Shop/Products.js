import ProductItem from './ProductItem';
import classes from './Products.module.css';

const products = [
  {
    name: 'Computer',
    price: 1000,
    description: 'A brand new computer',
  },
  {
    name: 'Mouse',
    price: 30,
    description: 'A brand new mouse',
  },
  {
    name: 'Keyboard',
    price: 90,
    description: 'A new ergonomic keyboard',
  },
];

const Products = props => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {products.map((product, i) => (
          <ProductItem key={`${i}: ${product.name}`} name={product.name} price={product.price} description={product.description} />
        ))}
      </ul>
    </section>
  );
};

export default Products;
