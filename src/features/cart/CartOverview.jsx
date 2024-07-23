import { Link } from "react-router-dom";

function CartOverview() {
  return (
    <div className="flex items-center justify-between bg-stone-800 px-5 py-5 uppercase text-white">
      <p className="text-lg font-semibold">
        <span className="mr-5">23 pizzas</span>
        <span>$23.45</span>
      </p>
      <Link to="/cart">Open cart &rarr;</Link>
    </div>
  );
}

export default CartOverview;
