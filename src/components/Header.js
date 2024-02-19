import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
// import useDarkMode from "use-dark-mode";
// import { useDarkMode } from "@rbnd/react-dark-mode";
import useOnline from "../utils/useOnline";
import {useSelector} from "react-redux"
const Header = () => {
  const [btnReact, setBtnReact] = useState("Login");
  // const darkMode = useDarkMode(false);
  const isOnline = useOnline();
  // const { mode, setMode } = useDarkMode("light");
  console.log(isOnline);
  const cartItems = useSelector(store => store.cart.items)
  console.log(cartItems)
  return (
    <div className="flex justify-between bg-slate-300 sm:bg-red-700">
      <div className="logo">
        <img data-testid="logo" className="h-28 p-2" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul className="flex py-10">
          <li className="px-2 text-white font-bold">
            <Link to="/">Home</Link>
          </li>
          <li className="px-2 text-white font-bold">
            <Link to="/about">About</Link>
          </li>
          <li className="px-2 text-white font-bold">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="px-2 text-white font-bold">
            <Link to="/cart" data-testid="cart">Cart-{cartItems?.length}</Link>
          </li>
          <div className="px-2 text-white font-bold" data-testid="online">{isOnline ?"🟢":"🔴"}</div>
          <li className="px-2">
            {/* <button
            className="px-2 text-white font-bold"
              onClick={() => setMode(mode === "light" ? "dark" : "light")}
              active={mode === "dark"}
            >
              Dark
            </button> */}
            {/* <button type="button" onClick={darkMode.disable}>
          ☀
        </button> */}
            {/* <Header checked={darkMode.value} onChange={darkMode.toggle} /> */}
            {/* <button type="button" onClick={darkMode.enable}>
          ☾
        </button> */}
          </li>
          {/* <li> <button className='login' onClick={()=>{
              btnReact === 'Login'? setBtnReact('Logout'):setBtnReact('Login')
            }}>{btnReact}</button></li> */}
        </ul>
      </div>
    </div>
  );
};
export default Header;
