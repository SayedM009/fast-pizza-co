import { useState } from "react";
import Button from "../../ui/Button";
import { useDispatch, useSelector } from "react-redux";
import { updateName } from "./userSlice";
import { useNavigate } from "react-router-dom";
function CreateUser() {
  const [username, setUsername] = useState("");
  const { userName, isLoading } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    if (!username) return;
    dispatch(updateName(username));
    navigate("/menu");
  }

  return (
    <>
      {userName ? (
        <div className="mt-5" onClick={() => navigate("/menu")}>
          <Button type="primary" disabled={isLoading}>
            continue ordering, {userName}
          </Button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="mt-5">
          <p className="text-sm md:text-xl">
            👋 Welcome! Please start by telling us your name:
          </p>

          <input
            type="text"
            placeholder="Your full name"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="my-5 border-cyan-800 p-2 outline-none focus:border-r-4 md:w-96"
          />

          <div>
            <Button type="primary" disabled={isLoading}>
              Start ordering
            </Button>
          </div>
        </form>
      )}
    </>
  );
}

export default CreateUser;
