import AmazonLogo from "../assets/images/amazon.png";
import "../styles/Footer.css";
import SelectElement from "./SelectElement";
import { CiGlobe } from "react-icons/ci";
import { FaDollarSign } from "react-icons/fa6";
import { FaFlagUsa } from "react-icons/fa";



const Footer = () => {
  return (
    <footer>
      <div className="footer-top">
        <p>Back to top</p>
      </div>
      <div className="footer-navigation">
        <div className="footer-navigation-wrapper">
          <div>
            <h2>Get to Know Us</h2>
            <ul>
              <a href="">
                <li>Careers</li>
              </a>
              <a href="">
                <li>Blog</li>
              </a>
              <a href="">
                <li>About Amazon</li>
              </a>
              <a href="">
                <li>Investor Relations</li>
              </a>
              <a href="">
                <li>Amazon Devices</li>
              </a>
              <a href="">
                <li>Amazon Science</li>
              </a>
            </ul>
          </div>
          <div>
            <h2>Make Money with Us</h2>
            <ul>
              <a href="">
                <li>Sell products on Amazon</li>
              </a>
              <a href="">
                <li>Sell on Amazon Business</li>
              </a>
              <a href="">
                <li>Sell apps on Amazon</li>
              </a>
              <a href="">
                <li>Become an Affiliate</li>
              </a>
              <a href="">
                <li>Advertise Your Products</li>
              </a>
              <a href="">
                <li>Self-Publish with Us</li>
              </a>
              <a href="">
                <li>Host an Amazon Hub</li>
              </a>
              <a href="">
                <li>›See More Make Money with Us</li>
              </a>
            </ul>
          </div>
          <div>
            <h2>Amazon Payment Products</h2>
            <ul>
              <a href="">
                <li>Amazon Business Card</li>
              </a>
              <a href="">
                <li>Shop with Points</li>
              </a>
              <a href="">
                <li>Reload Your Balance</li>
              </a>
              <a href="">
                <li>Amazon Currency Converter</li>
              </a>
            </ul>
          </div>
          <div>
            <h2>Let Us Help You</h2>
            <ul>
              <a href="">
                <li>Amazon and COVID-19</li>
              </a>
              <a href="">
                <li>Your Account</li>
              </a>
              <a href="">
                <li>Your Orders</li>
              </a>
              <a href="">
                <li>Shipping Rates & Policies</li>
              </a>
              <a href="">
                <li>Returns & Replacements</li>
              </a>
              <a href="">
                <li>Manage Your Content and Devices</li>
              </a>
              <a href="">
                <li>Amazon Assistant</li>
              </a>
              <a href="">
                <li>Help</li>
              </a>
            </ul>
          </div>
        </div>
        <div className="footer-navigation-bottom flex items-center justify-center gap-x-2 mt-16 border-gray-500 border-t border-1 py-5 mb-10">
            <img src={AmazonLogo} alt="" className="h-8" />
            <SelectElement text="English"><CiGlobe /></SelectElement>
            <SelectElement text="USD - U.S. Dollar"><FaDollarSign /></SelectElement>
            <SelectElement text="United States"><FaFlagUsa /></SelectElement>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
