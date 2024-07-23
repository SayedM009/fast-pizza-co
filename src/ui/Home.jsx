import CreateUser from "../features/user/CreateUser";

function Home() {
  return (
    <div className="mt-10 text-center font-semibold text-black">
      <h1 className="text-3xl">The best pizza.</h1>
      <h2 className="mt-5 text-base text-yellow-500 md:text-3xl">
        Straight out of the oven, straight to you.
      </h2>
      <CreateUser />
    </div>
  );
}

export default Home;
