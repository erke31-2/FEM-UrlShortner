const Nav = () => {
  return (
    <div className="absolute text-center right-[32px] left-[32px] top-[80px] bg-DarkViolet rounded-lg z-10 flex flex-col px-6 h-[430px] justify-evenly text-white font-bold text-xl">
      <ul className="flex flex-col gap-8">
        <li className="text-xl">
          <a href="#">Features</a>
        </li>
        <li className="text-xl">
          <a href="#">Pricing</a>
        </li>
        <li className="text-xl">
          <a href="#">Resources</a>
        </li>
      </ul>
      <div className="w-full h-[1px] bg-GrayishViolet"/>
      <div className="flex flex-col items-center justify-center gap-8">
        <button>Login</button>
        <button className="bg-Cyan w-full py-4 rounded-[30px] relative hover:before:content-[''] hover:before:absolute hover:before:inset-0 hover:before:bg-Gray/40 hover:before:rounded-[30px]">Sign Up</button>
      </div>
    </div>
  );
};
export default Nav;
