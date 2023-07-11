import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import search from "../../../public/images/search.svg";
import cart from "../../../public/images/cart.svg";
export const Header = () => {
  const cartItemsLength = useSelector(
    (state) => state.cartReducer.cartItems.length
  );
  return (
    <header className="mb-12">
      <nav>
        <ul className="flex items-center justify-end">
          <li className="text-xl font-bold mr-auto">Good evening, Artemie</li>
          <li>
            <img
              className="cursor-pointer w-4 h-4 mr-12"
              src={search}
              alt="search"
            />
          </li>
          <li className="relative">
            <Link to="/cart">
              <img className="cursor-pointer w-6 h-6" src={cart} alt="search" />
              <span className="absolute top-2 -right-4 text-sm">
                {cartItemsLength}
              </span>
            </Link>
          </li>
          <li className="ml-24">
            <Link className="text-lg" to="/signin">
              Sign In
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
