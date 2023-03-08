import classes from './CartButton.module.css';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { uiActions } from '../../store/ui-slice';

const CartButton = props => {
  const totalItemsInCart = useSelector(state => state.cart.numberOfItemsInCart);
  const cartDispatch = useDispatch();

  const toggleCartHandler = () => {
    cartDispatch(uiActions.toggleCart());
  };

  return (
    <button type='button' onClick={toggleCartHandler} className={classes.button}>
      <span>My Cart</span>
      <span className={classes.badge}>{totalItemsInCart}</span>
    </button>
  );
};

export default CartButton;
