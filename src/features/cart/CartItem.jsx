/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import Button from "../../ui/Button";
import { formatCurrency } from "../../utils/helpers";

function CartItem({ item, deleteBtn }) {
  const { pizzaId, name, quantity, totalPrice } = item;

  return (
    <li className="my-5 flex justify-between border-b-2 border-stone-300 pb-3 text-lg font-bold">
      <p>
        {quantity}&times; {name}
      </p>
      <div className="flex items-center gap-4">
        <p>{formatCurrency(totalPrice)}</p>
        {deleteBtn && <Button type="small">Delete</Button>}
      </div>
    </li>
  );
}

export default CartItem;
