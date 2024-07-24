/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useDispatch, useSelector } from "react-redux";
import { formatCurrency } from "../../utils/helpers";
import { addItem, getCurrentQuantity } from "../cart/cartSlice";
import Button from "../../ui/Button";
import DeleteBtn from "../cart/DeleteBtn";
import UpdateItemQuantity from "../cart/UpdateItemQuantity";

function MenuItem({ pizza }) {
  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;
  const dispatch = useDispatch();
  const currentQuantity = useSelector(getCurrentQuantity(id));
  const isInCart = currentQuantity > 0;
  // Adding item to cart
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

          {/* Delete Button with Render Logic check the Quantity is > 0 */}
          {isInCart && (
            <div className="flex items-center gap-3">
              <UpdateItemQuantity pizzaId={id} />
              <DeleteBtn pizzaId={id} />
            </div>
          )}
          {/* Adding to th Cart Button with Render Logic check the Quantity is > 0 and is it sold out or not*/}
          {!soldOut && !isInCart && (
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
