import { useSelector } from "react-redux";
import { GameItem } from "../../components/game-item/game-item.jsx";
import { removeGameFromCart } from "../../reducer/cartSlice.js";
import { NoItems } from "../../components/no-items/no-items.jsx";
export const Cart = () => {
  const itemsList = useSelector((state) => state.cartReducer.cartItems);
  return (
    <div className="cart">
      {itemsList.length > 0 ? (
        <ul className="grid grid-cols-3 gap-12">
          {itemsList.map(({ id, name, background_image, genres, rating }) => {
            return (
              <GameItem
                id={id}
                key={name}
                name={name}
                background_image={background_image}
                genres={genres}
                rating={rating}
                btnText={"Remove from cart -"}
                dispatchFunc={removeGameFromCart}
              />
            );
          })}
        </ul>
      ) : (
        <NoItems />
      )}
    </div>
  );
};
