/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { formatCurrency } from "../../utils/helpers";
import DeleteBtn from "./DeleteBtn";
import UpdateItemQuantity from "./UpdateItemQuantity";

function CartItem({ item }) {
  const { pizzaId, name, quantity, totalPrice } = item;

  return (
    <li className="my-5 flex justify-between border-b-2 border-stone-300 pb-3 text-lg font-bold">
      <p>
        {quantity}&times; {name}
      </p>
      <div className="flex items-center gap-4">
        <p>{formatCurrency(totalPrice)}</p>
        <UpdateItemQuantity pizzaId={pizzaId} />
        <DeleteBtn pizzaId={pizzaId} />
      </div>
    </li>
  );
}

export default CartItem;
