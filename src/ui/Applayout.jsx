import { Outlet, useNavigation } from "react-router-dom";
import CartOverview from "../features/cart/CartOverview";
import Header from "./Header";
import Loader from "./Loader";

function Applayout() {
  const navigate = useNavigation();
  const renderLogic = navigate.state === "loading";
  return (
    <div className="grid h-screen grid-rows-[auto_1fr_auto] bg-stone-200">
      <Header />
      {renderLogic && <Loader />}
      <main className="overflow-y-scroll">
        <Outlet />
      </main>
      <CartOverview />
    </div>
  );
}

export default Applayout;
