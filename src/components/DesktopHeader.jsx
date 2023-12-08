import React from "react";
import AmazonLogo from "../assets/images/amazon.png";
import "../styles/DesktopHeader.css";
import { MdSearch } from "react-icons/md";
import USAFlagSVG from "../assets/images/united-states-flag-icon.svg";
import { LuShoppingCart } from "react-icons/lu";
import { IoLocationOutline } from "react-icons/io5";
import { FaCaretDown } from "react-icons/fa6";
import { GiHamburgerMenu } from "react-icons/gi";



const DesktopHeader = () => {
  return (
    <header id="desktop-header">
      <div className="header-main flex justify-between items-center gap-x-10">
        <img src={AmazonLogo} className="amazon-logo" alt="" />
        <div className="header-delivery-options flex items-center w-24">
          <IoLocationOutline className="mr-1" />
          <div className="flex flex-col justify-center">
            <span className="m-0 p-0">Deliver to</span>
            <span className="m-0 p-0">Serbia</span>
          </div>
        </div>
        <form className="header-search-div">
          <select className="select-search text-black" defaultValue="search-alias=aps">
            <option value="search-alias=aps">
              All Departments
            </option>
            <option value="search-alias=arts-crafts-intl-ship">
              Arts &amp; Crafts
            </option>
            <option value="search-alias=automotive-intl-ship">
              Automotive
            </option>
            <option value="search-alias=baby-products-intl-ship">Baby</option>
            <option value="search-alias=beauty-intl-ship">
              Beauty &amp; Personal Care
            </option>
            <option value="search-alias=stripbooks-intl-ship">Books</option>
            <option value="search-alias=fashion-boys-intl-ship">
              Boys' Fashion
            </option>
            <option value="search-alias=computers-intl-ship">Computers</option>
            <option value="search-alias=deals-intl-ship">Deals</option>
            <option value="search-alias=digital-music">Digital Music</option>
            <option value="search-alias=electronics-intl-ship">
              Electronics
            </option>
            <option value="search-alias=fashion-girls-intl-ship">
              Girls' Fashion
            </option>
            <option value="search-alias=hpc-intl-ship">
              Health &amp; Household
            </option>
            <option value="search-alias=kitchen-intl-ship">
              Home &amp; Kitchen
            </option>
            <option value="search-alias=industrial-intl-ship">
              Industrial &amp; Scientific
            </option>
            <option value="search-alias=digital-text">Kindle Store</option>
            <option value="search-alias=luggage-intl-ship">Luggage</option>
            <option value="search-alias=fashion-mens-intl-ship">
              Men's Fashion
            </option>
            <option value="search-alias=movies-tv-intl-ship">
              Movies &amp; TV
            </option>
            <option value="search-alias=music-intl-ship">
              Music, CDs &amp; Vinyl
            </option>
            <option value="search-alias=pets-intl-ship">Pet Supplies</option>
            <option value="search-alias=instant-video">Prime Video</option>
            <option value="search-alias=software-intl-ship">Software</option>
            <option value="search-alias=sporting-intl-ship">
              Sports &amp; Outdoors
            </option>
            <option value="search-alias=tools-intl-ship">
              Tools &amp; Home Improvement
            </option>
            <option value="search-alias=toys-and-games-intl-ship">
              Toys &amp; Games
            </option>
            <option value="search-alias=videogames-intl-ship">
              Video Games
            </option>
            <option value="search-alias=fashion-womens-intl-ship">
              Women's Fashion
            </option>
          </select>

          <input
            type="search"
            name=""
            className="search-amazon-input"
            placeholder="Search Amazon"
          />
          <div className="search-btn-div">
            <button className="search-btn flex justify-center items-center">
              <MdSearch />
            </button>
          </div>
        </form>
        <div className="header-language-options flex items-center gap-x-1">
          <img src={USAFlagSVG} alt="" className="w-5" />
          <span>EN</span>
          <FaCaretDown />
        </div>
        <div className="header-account-options">
          <p>Hello, sign in</p>
          <div className="header-account-options-helper flex">
            <p>Account & Lists</p>
            <FaCaretDown />
          </div>
        </div>
        <div className="header-returns-options">
          <p>Returns</p>
          <p>& Orders</p>
        </div>
        <div className="header-cart flex items-center gap-x-1">
          <LuShoppingCart />
          <span className="font-bold self-end">Cart</span>
        </div>
      </div>
      <nav className="header-nav px-5">
        <ul>
          <li className="flex items-center header-nav-hamburger gap-x-1 font-bold"><GiHamburgerMenu /> <span>All</span></li>
          <li>Today's Deals</li>
          <li>Registry</li>
          <li>Customer Service</li>
          <li>Gift Cards</li>
          <li>Sell</li>
        </ul>
      </nav>
    </header>
  );
};

export default DesktopHeader;
