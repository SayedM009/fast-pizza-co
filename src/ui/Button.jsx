/* eslint-disable react/prop-types */
const base =
  "rounded-full bg-yellow-400 font- uppercase font-semibold tracking-widest transition-colors hover:bg-yellow-300 focus:ring focus:ring-yellow-300 focus:ring-offset-2 ";
const style = {
  primary: base + "px-4 py-2.5 md:px-6 md:py-3",
  small: base + "p-2 text-xs",
  secondary:
    "inline-block rounded-full border-2 border-stone-300 font-semibold uppercase tracking-wide text-stone-400 transition-colors duration-300 hover:bg-stone-300 focus:bg-stone-300 focus:outline-none focus:ring focus:ring-stone-300 foucs:ring-offset-2 disabled:cursor-not-allowed px-4 py-2.5 md:px-6 md:py-3",
  round: base + "rounded-full h-8 w-8",
};
function Button({ children, disabled, type, onClick }) {
  return (
    <div>
      <button disabled={disabled} className={style[type]} onClick={onClick}>
        {children}
      </button>
    </div>
  );
}

export default Button;
