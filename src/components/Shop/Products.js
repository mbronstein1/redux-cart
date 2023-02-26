import ProductItem from './ProductItem';
import classes from './Products.module.css';

const Products = props => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        <ProductItem name='Computer' price={1000} description='A brand new computer' />
        <ProductItem name='Mouse' price={30} description='A brand new mouse' />
        <ProductItem name='Keyboard' price={90} description='A new ergonomic keyboard' />
      </ul>
    </section>
  );
};

export default Products;
