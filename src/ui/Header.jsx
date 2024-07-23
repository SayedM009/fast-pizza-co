import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";
import UserName from "../features/user/UserName";

function Header() {
  return (
    <header className="flex items-center justify-between bg-yellow-500 px-5 py-5 uppercase">
      <Link to="/" className="text-3xl font-semibold">
        Fast Pizza
      </Link>
      <SearchOrder />
      <UserName />
    </header>
  );
}

export default Header;
