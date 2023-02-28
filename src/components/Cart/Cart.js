import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';
import { useSelector } from 'react-redux';

const Cart = props => {
  const totalPrice = useSelector(state => state.cart.totalPrice);
  const cartItems = useSelector(state => state.cart.itemsInCart);

  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      {cartItems.length !== 0 ? (
        <>
          <ul>
            {cartItems.map((item, index) => (
              <CartItem key={`${item.name}: ${index}`} item={item} />
            ))}
          </ul>
          <hr />
          <p>
            <strong>Total price: </strong>${totalPrice}
          </p>
        </>
      ) : (
        <p>No items currently in your cart!</p>
      )}
    </Card>
  );
};

export default Cart;
