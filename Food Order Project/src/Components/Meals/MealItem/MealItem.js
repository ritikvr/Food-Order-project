import { useContext } from "react";
import classes from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";
import CartContext from "../../../store/cart-context";

const MealItem = (props) => {
  const price = `Rs ${props.price.toFixed(2)}`;
  const cartCtx=useContext(CartContext);

  const addTOCartHandler=(amount)=>{
    cartCtx.addItem({
      id:props.id,
      name:props.name,
      amount:amount,
      price:props.price
    })
  }
  return (
    <div className={classes.meal}>
      <div className={classes.image}>{props.image}</div>
      <div className={classes.content}>
        <h3>{props.name}</h3>
        <p className={classes.description}>{props.description}</p>
        <div className={classes.price}>{price}</div>
        <MealItemForm id={props.id} onAddToCart={addTOCartHandler}/>
      </div>
    </div>
  );
};
export default MealItem;
