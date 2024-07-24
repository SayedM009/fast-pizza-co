/* eslint-disable react/prop-types */
import { useDispatch, useSelector } from "react-redux";
import { getCurrentQuantity } from "./cartSlice";
import { decreaseQuantity } from "./cartSlice";
import { increaseQuantity } from "./cartSlice";
import Button from "../../ui/Button";

function UpdateItemQuantity({ pizzaId }) {
  const currentQuantity = useSelector(getCurrentQuantity(pizzaId));
  const dispatch = useDispatch();
  return (
    <div className="flex items-center gap-4">
      <Button type="round" onClick={() => dispatch(decreaseQuantity(pizzaId))}>
        -
      </Button>
      <span>{currentQuantity}</span>
      <Button type="round" onClick={() => dispatch(increaseQuantity(pizzaId))}>
        +
      </Button>
    </div>
  );
}

export default UpdateItemQuantity;
