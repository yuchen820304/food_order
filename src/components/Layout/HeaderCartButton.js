import CartIcon from '../Cart/CartIcon';
import classes from './HeaderCartButton.module.css';

// 購物車按鈕component，同時引入購物車svg圖片的component
const HeaderCartButton = props => {
  return (
    <button className={classes.button}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>3</span>
    </button>
  );
};

export default HeaderCartButton;
