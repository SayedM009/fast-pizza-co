import { Link } from "react-router-dom";

function EmptyCart() {
  return (
    <div className="p-5">
      <Link to="/menu" className="text-blue-500 hover:underline">
        &larr; Back to menu
      </Link>

      <p className="mt-10 text-2xl font-extrabold uppercase">
        Your cart is still empty. Start adding some pizzas :)
      </p>
    </div>
  );
}

export default EmptyCart;
