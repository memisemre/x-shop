import { BiUserCircle, BiChevronDown } from "react-icons/bi";
import Basket from "../basket/basket";
import Style from "./comp.module.scss";
import Link from "next/link";

const Header = () => {
  return (
    <header className={Style.header}>
      <nav>
        <Link href="/">
          <span>Home</span>
        </Link>
        <Link href="/">
          <span>Categories</span>
          <BiChevronDown />
        </Link>
        {/* *TODO: Dropdown Menu*/}
      </nav>
      <Link className={Style.logo} href="/">
        <div>
          <span>X</span>
        </div>
      </Link>
      <div className={Style.userControl}>
        <Basket />
        <Link href="/" className={Style.loginBTN}>
          <BiUserCircle />
        </Link>
      </div>
    </header>
  );
};
export default Header;
