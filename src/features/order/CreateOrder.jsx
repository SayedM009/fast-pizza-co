/* eslint-disable react-refresh/only-export-components */
/* eslint-disable no-unused-vars */
import {
  Form,
  redirect,
  useActionData,
  useNavigation,
  useRouteError,
} from "react-router-dom";
import { createOrder } from "../../services/apiRestaurant";
import { useSelector } from "react-redux";
import { clearCart, getCart, getTotalPirce } from "../cart/cartSlice";
import { formatCurrency } from "../../utils/helpers";
import Button from "../../ui/Button";
import EmptyCart from "../cart/EmptyCart";
import store from "../../store";
import { useState } from "react";

// https://uibakery.io/regex-library/phone-number
const isValidPhone = (str) =>
  /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
    str,
  );

function CreateOrder() {
  const [withPriority, setWithPriority] = useState(false);
  const { userName } = useSelector((state) => state.user);
  const cart = useSelector(getCart);
  const isSubmitting = useNavigation().state === "submitting";
  const error = useActionData();
  const totalCartPirce = useSelector(getTotalPirce);
  const priorityPrice = withPriority ? totalCartPirce * 0.2 : 0;
  const totalPrice = totalCartPirce + priorityPrice;

  if (cart.length === 0) return <EmptyCart />;
  return (
    <div className="px-3 py-4">
      <h2 className="text-2xl font-bold">Ready to order? Let&apos;s go!</h2>

      <Form method="POST" className="my-5">
        <div>
          <label className="my-3 inline-block font-medium">First Name</label>
          <input
            type="text"
            name="customer"
            required
            className="input w-full"
            defaultValue={userName}
          />
        </div>

        <div>
          <label className="my-3 inline-block font-medium">Phone number</label>
          <div>
            <input type="tel" name="phone" required className="input w-full" />
            {}
          </div>
          {error ? (
            <p className="mx-auto mt-2 w-fit bg-red-400 p-1 text-xs capitalize text-white">
              {error.error}
            </p>
          ) : (
            ""
          )}
        </div>

        <div>
          <label className="my-3 inline-block font-medium">Address</label>
          <div>
            <input
              type="text"
              name="address"
              required
              className="input w-full"
            />
          </div>
        </div>

        <div className="mt-3 flex items-center gap-x-3 font-bold">
          <input
            type="checkbox"
            name="priority"
            id="priority"
            value={withPriority}
            onChange={(e) => setWithPriority(e.target.checked)}
            className="h-4 w-4 accent-yellow-400 checked:ring checked:ring-yellow-400"
          />
          <label htmlFor="priority">Want to yo give your order priority?</label>
        </div>

        <div className="mt-5">
          <input type="hidden" name="cart" value={JSON.stringify(cart)}></input>
          <Button disabled={isSubmitting} type="primary">
            {isSubmitting
              ? "placing order"
              : `order now ${formatCurrency(totalPrice)}`}
          </Button>
        </div>
      </Form>
    </div>
  );
}

export async function action({ request }) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  const newOrder = {
    ...data,
    cart: JSON.parse(data.cart),
    priority: data.priority === "true",
  };
  const errors = {};
  if (!isValidPhone(data.phone))
    errors.error =
      "You have to put a correct number because we might need it to contact you";

  if (Object.keys(errors).length > 0) return errors;

  store.dispatch(clearCart());
  const setNewOrder = await createOrder(newOrder);
  return redirect(`/order/${setNewOrder.id}`);
}

export default CreateOrder;
