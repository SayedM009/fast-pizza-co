import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./ui/Home";
import Menu, { loader as menuLoader } from "./features/menu/Menu";
import Cart from "./features/cart/Cart";
import CreateOrder, {
  action as createOrderAtion,
} from "./features/order/CreateOrder";
import Order, { loader as orderLoader } from "./features/order/Order";
import Applayout from "./ui/Applayout";
import Error from "./ui/Error";

const router = createBrowserRouter([
  {
    element: <Applayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/menu",
        element: <Menu />,
        loader: menuLoader,
        errorElement: <Error />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/order/new",
        element: <CreateOrder />,
        action: createOrderAtion,
      },
      {
        path: "/order/:id",
        element: <Order />,
        loader: orderLoader,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
