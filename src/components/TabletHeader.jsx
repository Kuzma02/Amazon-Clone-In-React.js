import AmazonLogo from "../assets/images/amazon.png";
import { GiHamburgerMenu } from "react-icons/gi";
import "../styles/TabletHeader.css";
import { LuUser2 } from "react-icons/lu";
import { LuShoppingCart } from "react-icons/lu";

const TabletHeader = () => {
  return (
    <header id="tablet-header">
      <div className="header-tablet-main flex justify-between items-center">
        <div className="flex items-center h-full">
          <GiHamburgerMenu className="text-white mb-2" />
          <img src={AmazonLogo} className="amazon-tablet-logo" alt="" />
        </div>

        <div className="text-white flex">
          <LuUser2 />
          <LuShoppingCart />
        </div>
      </div>
      <nav className="header-tablet-nav"></nav>
    </header>
  );
};

export default TabletHeader;
