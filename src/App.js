import { useEffect } from 'react';
import Notification from './components/UI/Notification';
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import { useSelector, useDispatch } from 'react-redux';
import { uiActions } from './store/ui';

let isInitial = true;

function App() {
  const showCart = useSelector(state => state.ui.showCart);
  const cart = useSelector(state => state.cart);
  const notification = useSelector(state => state.ui.notification);

  const dispatch = useDispatch();

  useEffect(() => {
    const sendCartData = async () => {
      dispatch(
        uiActions.showNotification({
          status: 'pending',
          title: 'Sending...',
          message: 'Cart data is sending...',
        })
      );
      try {
        const response = await fetch('https://react-http-practice-54ed4-default-rtdb.firebaseio.com/cart.json', {
          method: 'PUT',
          body: JSON.stringify(cart),
        });

        if (!response.ok) {
          throw new Error('Sending cart data failed');
        }

        dispatch(
          uiActions.showNotification({
            status: 'success',
            title: 'Success!',
            message: 'Cart data has been sent',
          })
        );
      } catch (err) {
        dispatch(
          uiActions.showNotification({
            status: 'error',
            title: 'Error!',
            message: 'Cart data failed to send...',
          })
        );
      }
    };

    isInitial ? (isInitial = false) : sendCartData();
  }, [cart, dispatch]);

  return (
    <>
      {notification && <Notification status={notification.status} title={notification.title} message={notification.message} />}
      <Layout>
        {showCart && <Cart />}
        <Products />
      </Layout>
    </>
  );
}

export default App;
