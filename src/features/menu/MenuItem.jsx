/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import Button from "../../ui/Button";
import { formatCurrency } from "../../utils/helpers";

function MenuItem({ pizza }) {
  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;

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
          <Button type="small">add to cart</Button>
        </div>
      </div>
    </li>
  );
}

export default MenuItem;
