import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
export const GameItem = ({
  id,
  name,
  dispatchFunc,
  background_image,
  genres,
  rating,
  btnText,
}) => {
  const dispatch = useDispatch();
  return (
    <li className=" bg-second px-4 py-4 rounded-lg" key={id}>
      <Link to={`/${name}`}>
        <img
          className="w-full h-56 rounded-lg object-cover mb-4"
          src={background_image}
          alt={name}
        />
      </Link>
      <button
        onClick={() =>
          dispatch(dispatchFunc({ id, name, background_image, genres, rating }))
        }
        className="text-white text-lg ease-in-out duration-300 mb-4 font-bold hover:text-text"
      >
        {btnText}
      </button>
      <h3 className="text-xl font-bold mb-4">{name}</h3>
      <div className="flex mb-4">
        Genres:
        {genres.map(({ id, name }) => {
          return (
            <p className="mr-4 ml-2" key={id}>
              {name}
            </p>
          );
        })}
      </div>
      <h5>{rating}</h5>
    </li>
  );
};
