import classes from './CartItem.module.css';
import { useDispatch } from 'react-redux';
import { cartActions } from '../../store/cart-slice';

const CartItem = props => {
  const { name, quantity, price } = props.item;
  const totalItemPrice = quantity * price;

  const dispatch = useDispatch();

  const handleIncrementItem = () => {
    dispatch(cartActions.addItemToCart({ name, price }));
  };

  const handleDecrementItem = () => {
    dispatch(cartActions.removeItemFromCart({ name, price }));
  };

  return (
    <>
      <li className={classes.item}>
        <header>
          <h3>{name}</h3>
          <div className={classes.price}>
            ${totalItemPrice?.toFixed(2)} <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
          </div>
        </header>
        <div className={classes.details}>
          <div className={classes.quantity}>
            x <span>{quantity}</span>
          </div>
          <div className={classes.actions}>
            <button onClick={handleDecrementItem}>-</button>
            <button onClick={handleIncrementItem}>+</button>
          </div>
        </div>
      </li>
    </>
  );
};

export default CartItem;
