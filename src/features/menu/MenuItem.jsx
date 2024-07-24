/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useDispatch } from "react-redux";
import Button from "../../ui/Button";
import { formatCurrency } from "../../utils/helpers";
import { addItem } from "../cart/cartSlice";

function MenuItem({ pizza }) {
  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;
  const dispatch = useDispatch();

  function handleAddingtoCart() {
    const newItem = {
      pizzaId: id,
      name,
      quantity: 1,
      unitPrice,
      totalPrice: 1 * unitPrice,
    };

    dispatch(addItem(newItem));
  }
  return (
    <li className={`mb-2 flex gap-2 border-b-2 border-stone-300 pb-2`}>
      <img
        src={imageUrl}
        alt={name}
        className={`h-24 ${soldOut && "grayscale"}`}
      />
      <div className="flex w-full flex-wrap content-between">
        <p className="w-full font-medium">{name}</p>
        <p className="mb-2 text-sm capitalize italic">
          {ingredients.join(", ")}
        </p>
        <div className="mt-auto flex w-full items-end justify-between pr-3 text-sm">
          {!soldOut ? <p>{formatCurrency(unitPrice)}</p> : <p>Sold out</p>}
          {!soldOut && (
            <Button type="small" onClick={handleAddingtoCart}>
              add to cart
            </Button>
          )}
        </div>
      </div>
    </li>
  );
}

export default MenuItem;
