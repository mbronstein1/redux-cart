import classes from './CartButton.module.css';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { cartActions } from '../store/cart';

const CartButton = props => {
  const totalItemsInCart = useSelector(state => state.numberOfItemsInCart);
  const cartDispatch = useDispatch();

  const toggleCartHandler = () => {
    cartDispatch(cartActions.toggleCart());
  };

  return (
    <button type='button' onClick={toggleCartHandler} className={classes.button}>
      <span>My Cart</span>
      <span className={classes.badge}>{totalItemsInCart}</span>
    </button>
  );
};

export default CartButton;
