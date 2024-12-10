import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg";
import cartIcon from "../../assets/cartIcon.svg";
import cartIconWhite from "../../assets/whiteCartIcon.svg";
import styles from "./Header.module.css";
import { useSelector, useDispatch } from "react-redux";
import { Switcher, MobileSwitcher } from "../theme/switch";
import { useState, useEffect } from "react";
import { toggleTheme } from "../../redux/themeSlice";

export default function Header() {
  const dispatch = useDispatch();
  const isDarkMode = useSelector((state) => state.theme.isDarkMode);
  const { items } = useSelector((state) => state.cart);
  const totalQuantity = items.reduce((total, item) => total + item.quantity, 0);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 450);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 450);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header>
      <div
        className="container"
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "30px clamp(15px, 3.8vw, 40px) 28px ",
          flexDirection: isMobile ? "column" : "row",
        }}>
        <div className={styles.Header_navBox}>
          <Link style={{ margin: 0, height: "fit-content" }} to="/">
            <img src={logo} alt="logo" className={styles.Header_logo} />
          </Link>
          <Switcher isDarkMode={isDarkMode} toggleDarkMode={() => dispatch(toggleTheme())} />
        </div>
        <nav>
          <ul className={styles.Header_navBox}>
            <li className={styles.Header_navBox_hidden}>
              <Link to="/">Main Page</Link>
            </li>
            <li>
              <Link to="/categories">Categories</Link>
            </li>
            <li>
              <Link to="/products">All Products</Link>
            </li>
            <li>
              <Link to="/discounted-products">All Sales</Link>
            </li>
            <li>
              <Link to="/contact">Contact Us</Link>
            </li>
          </ul>
        </nav>
        <div style={{ display: isMobile ? "flex" : "block", alignItems: "center" }}>
          <Link
            className={styles.Header_cartLink}
            style={{ margin: 0 }}
            to="/cart">
            {items.length > 0 && (
              <p className={styles.Header_cartTotalQuantity}>{totalQuantity}</p>
            )}
            <img 
              src={isDarkMode ? cartIconWhite : cartIcon} 
              alt="cart" 
              className={styles.Header_cart} 
              style={{ width: isMobile ? "30px" : "40px", height: "auto" }} 
            />
          </Link>
          <div className={styles.MobileSwitcherContainer}>
            <MobileSwitcher isDarkMode={isDarkMode} toggleDarkMode={() => dispatch(toggleTheme())} />
          </div>
        </div>
      </div>
    </header>
  );
}
