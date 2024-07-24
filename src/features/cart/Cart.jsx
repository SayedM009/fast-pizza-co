/* eslint-disable no-unused-vars */
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCart } from "./cartSlice";
import { clearCart } from "./cartSlice";
import Button from "../../ui/Button";
import CartItem from "./CartItem";
import EmptyCart from "./EmptyCart";

function Cart() {
  const { userName } = useSelector((state) => state.user);
  const cart = useSelector(getCart);
  const dispatch = useDispatch();

  function handleClearingCart() {
    dispatch(clearCart());
  }

  if (cart.length <= 0) return <EmptyCart />;
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
        <Button type="secondary" onClick={handleClearingCart}>
          Clear cart
        </Button>
      </div>
    </div>
  );
}

export default Cart;
