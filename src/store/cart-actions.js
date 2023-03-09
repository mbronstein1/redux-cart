import { uiActions } from './ui-slice';
import { cartActions } from './cart-slice';

// Action creator function to handle sending cart data to firebase and handling notification dispatches
export const sendCartData = cart => {
  return async dispatch => {
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
        body: JSON.stringify({
          itemsInCart: cart.itemsInCart,
          totalPrice: cart.totalPrice,
          numberOfItemsInCart: cart.numberOfItemsInCart,
        }),
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
};

export const fetchCartData = () => {
  return async dispatch => {
    try {
      const response = await fetch('https://react-http-practice-54ed4-default-rtdb.firebaseio.com/cart.json');

      if (!response.ok) {
        throw new Error('Fetching cart data failed...');
      }

      const cartData = await response.json();
      dispatch(cartActions.replaceCart(cartData));
    } catch (err) {
      dispatch(
        uiActions.showNotification({
          status: 'error',
          title: 'Error!',
          message: 'Fetching cart data failed...',
        })
      );
    }
  };
};
