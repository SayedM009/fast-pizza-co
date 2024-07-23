import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SearchOrder() {
  const [query, setQuery] = useState();
  const navigate = useNavigate();
  function handleSubmit(e) {
    e.preventDefault();
    if (!query) return;
    navigate(`/order/${query}`);
    setQuery("");
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Type your order"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-44 rounded-full p-2 outline-none transition-all focus:w-52 md:w-56 md:focus:w-72"
        type="search"
      ></input>
    </form>
  );
}

export default SearchOrder;
