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
import Button from "../../ui/Button";
import { useSelector } from "react-redux";
// https://uibakery.io/regex-library/phone-number
const isValidPhone = (str) =>
  /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
    str,
  );

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

function CreateOrder() {
  // const [withPriority, setWithPriority] = useState(false);
  const { userName } = useSelector((state) => state.user);
  const cart = fakeCart;
  const isSubmitting = useNavigation().state === "submitting";
  const error = useActionData();
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
            // value={withPriority}
            // onChange={(e) => setWithPriority(e.target.checked)}
            className="h-4 w-4 accent-yellow-400 checked:ring checked:ring-yellow-400"
          />
          <label htmlFor="priority">Want to yo give your order priority?</label>
        </div>

        <div className="mt-5">
          <input type="hidden" name="cart" value={JSON.stringify(cart)}></input>
          <Button disabled={isSubmitting} type="primary">
            {isSubmitting ? "placing order" : "order now"}
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
    priority: data.priority === "on",
  };
  const errors = {};
  if (!isValidPhone(data.phone))
    errors.error =
      "You have to put a correct number because we might need it to contact you";

  if (Object.keys(errors).length > 0) return errors;

  const setNewOrder = await createOrder(newOrder);
  return redirect(`/order/${setNewOrder.id}`);
}

export default CreateOrder;
