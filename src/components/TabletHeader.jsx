import AmazonLogo from "../assets/images/amazon.png";
import { GiHamburgerMenu } from "react-icons/gi";
import "../styles/TabletHeader.css";
import { LuUser2 } from "react-icons/lu";
import { LuShoppingCart } from "react-icons/lu";
import { MdSearch } from "react-icons/md";

const TabletHeader = () => {
  return (
    <header id="tablet-header">
      <div className="header-tablet-main flex justify-between items-center">
        <div className="flex items-center gap-x-2 h-full">
          <GiHamburgerMenu className="text-xl text-white mb-2" />
          <img src={AmazonLogo} className="amazon-tablet-logo" alt="" />
        </div>

        <div className="text-white flex gap-x-5">
          <LuUser2 className="text-xl" />
          <LuShoppingCart className="text-xl" />
        </div>
      </div>
      <div className="header-tablet-bottom">
        <form className="header-tablet-search-div">

          <input
            type="search"
            name=""
            className="search-tablet-amazon-input"
            placeholder="Search Amazon"
          />
          <div className="search-tablet-btn-div">
            <button className="search-tablet-btn flex justify-center items-center">
              <MdSearch />
            </button>
          </div>
        </form>
      </div>
    </header>
  );
};

export default TabletHeader;
