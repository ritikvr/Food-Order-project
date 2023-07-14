import { useReducer } from "react";
import CartContext from "./cart-context";

const defaultCartState = {
  items: [],
  totalAmount: 0,
};
const CartReducer = (state, actions) => {
  if (actions.type === "ADD") {
    const updatedTotalAmount =
      state.totalAmount + actions.item.price * actions.item.amount;
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === actions.item.id
    );
    const existingCartItem = state.items[existingCartItemIndex];
    let updatedItems;
    if (existingCartItem) {
      const updatedItem = {
        ...existingCartItem,
        amount: existingCartItem.amount + actions.item.amount,
      };
      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;
    } else {
      updatedItems = state.items.concat(actions.item);
    }
    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }
  if (actions.type === "REMOVE") {
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === actions.id
    );
    const existingCartItem = state.items[existingCartItemIndex];
    const updatedTotalAmount = state.totalAmount - existingCartItem.price;
    let updatedItems;
    if(existingCartItem.amount===1){
      updatedItems=state.items.filter(item=>item.id!==actions.id);
    }else{
      const updatedItem={...existingCartItem,amount:existingCartItem.amount-1};
      updatedItems=[...state.items];
      updatedItems[existingCartItemIndex]=updatedItem;
    }
    return{
      items:updatedItems,
      totalAmount:updatedTotalAmount
    }
  }
  return defaultCartState;
};
const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(
    CartReducer,
    defaultCartState
  );

  const addItemHandler = (item) => {
    dispatchCartAction({ type: "ADD", item: item });
  };
  const removeItemHandler = (id) => {
    dispatchCartAction({ type: "REMOVE", id: id });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemHandler,
    removeItem: removeItemHandler,
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};
export default CartProvider;
