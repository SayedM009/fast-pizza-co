/* eslint-disable no-unused-vars */
import { Link } from "react-router-dom";
import Button from "../../ui/Button";
import CartItem from "./CartItem";
import { useSelector } from "react-redux";

const fakeCart = [
  {
    pizzaId: 12,
    name: "Mediterranean",
    quantity: 2,
    unitPrice: 16,
    totalPrice: 32,
  },
  {
    pizzaId: 6,
    name: "Vegetale",
    quantity: 1,
    unitPrice: 13,
    totalPrice: 13,
  },
  {
    pizzaId: 11,
    name: "Spinach and Mushroom",
    quantity: 1,
    unitPrice: 15,
    totalPrice: 15,
  },
];

function Cart() {
  const { userName } = useSelector((state) => state.user);
  const cart = fakeCart;

  return (
    <div className="px-4 py-3">
      <Link to="/menu" className="text-blue-500 hover:underline">
        &larr; Back to menu
      </Link>
      <h2 className="my-5 text-xl font-bold capitalize">
        your cart, {userName}
      </h2>
      <ul className="mt-9">
        {cart.map((item, i) => (
          <CartItem item={item} key={i} />
        ))}
      </ul>
      <div className="flex gap-x-3">
        <Link to="/order/new">
          <Button type="primary">Order pizzas</Button>
        </Link>
        <Button type="secondary">Clear cart</Button>
      </div>
    </div>
  );
}

export default Cart;
