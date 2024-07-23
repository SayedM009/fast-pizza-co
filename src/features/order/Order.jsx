/* eslint-disable react-refresh/only-export-components */
/* eslint-disable no-unused-vars */
// Test ID: IIDSAT

import { useLoaderData, useNavigation } from "react-router-dom";
import { getOrder } from "../../services/apiRestaurant";
import {
  calcMinutesLeft,
  formatCurrency,
  formatDate,
} from "../../utils/helpers";
import CartItem from "../cart/CartItem";

function Order() {
  // const order = useNavigation();
  // Everyone can search for all orders, so for privacy reasons we're gonna gonna exclude names or address, these are only for the restaurant staff
  const {
    id,
    status,
    priority,
    priorityPrice,
    orderPrice,
    estimatedDelivery,
    cart,
  } = useLoaderData();
  const deliveryIn = calcMinutesLeft(estimatedDelivery);
  return (
    <div className="px-3 py-5">
      <div className="flex flex-col justify-between gap-y-2 sm:flex-row sm:gap-x-0">
        <h2 className="text-xl font-bold uppercase">
          Order <span className="bg-stone-300 p-0.5">#{id}</span> Status
        </h2>

        <div>
          {priority && (
            <span className="mr-3 rounded-full bg-red-500 px-2 py-1 text-white">
              Priority
            </span>
          )}
          <span className="mr-3 rounded-full bg-green-500 px-2 py-1 uppercase text-white">
            {status.toUpperCase()} order
          </span>
        </div>
      </div>

      <div className="my-7 flex flex-col justify-between gap-y-2 bg-stone-300 px-5 py-3 sm:flex-row">
        <p className="text-lg font-semibold tracking-wide">
          {deliveryIn >= 0
            ? `Only ${calcMinutesLeft(estimatedDelivery)} minutes left 😃`
            : "Order should have arrived"}
        </p>
        <p>(Estimated delivery: {formatDate(estimatedDelivery)})</p>
      </div>

      <ul>
        {cart.map((item, i) => (
          <CartItem item={item} key={i * 9} delete="false" />
        ))}
      </ul>

      <div className="my-7 justify-between bg-stone-300 px-5 py-3">
        <p>Price pizza: {formatCurrency(orderPrice)}</p>
        {priority && (
          <p className="my-3">
            Price priority: {formatCurrency(priorityPrice)}
          </p>
        )}
        <p className="text-lg font-bold">
          To pay on delivery: {formatCurrency(orderPrice + priorityPrice)}
        </p>
      </div>
    </div>
  );
}

export default Order;

export async function loader({ params }) {
  const order = await getOrder(params.id);
  return order;
}
