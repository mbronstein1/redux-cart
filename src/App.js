import { useEffect } from 'react';
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import { useSelector } from 'react-redux';

function App() {
  const showCart = useSelector(state => state.showCart);
  const cart = useSelector(state => {
    return {
      numberOfItemsInCart: state.numberOfItemsInCart,
      itemsInCart: state.itemsInCart,
      totalPrice: state.totalPrice,
    };
  });

  useEffect(() => {
    fetch('https://react-http-practice-54ed4-default-rtdb.firebaseio.com/cart.json', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(cart),
    });
  }, [cart]);

  return (
    <Layout>
      {showCart && <Cart />}
      <Products />
    </Layout>
  );
}

export default App;
