import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function CartOverview() {
  const totalQuantity = useSelector((state) =>
    state.cart.cart.reduce((sum, item) => sum + item.quantity, 0),
  );
  const totalPrices = useSelector((state) =>
    state.cart.cart.reduce((sum, item) => sum + item.totalPrice, 0),
  );
  return (
    <div className="flex items-center justify-between bg-stone-800 px-5 py-5 uppercase text-white">
      <p className="text-lg font-semibold">
        <span className="mr-5">{totalQuantity} pizzas</span>
        <span>${totalPrices}</span>
      </p>
      <Link to="/cart">Open cart &rarr;</Link>
    </div>
  );
}

export default CartOverview;
