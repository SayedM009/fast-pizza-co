import { useSelector } from "react-redux";

function UserName() {
  const { userName } = useSelector((state) => state.user);
  if (!userName) return null;
  return <h2 className="hidden text-2xl font-light md:block">{userName}</h2>;
}

export default UserName;
