import { useParams, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { ImagesSlider } from "../../components/slider/slider.jsx";
export const OneGame = () => {
  const { gameName } = useParams();
  const gamesList = useSelector((state) => state.gamesReducer.gamesList);
  const navigate = useNavigate();
  const selectedProduct = gamesList.find(
    (product) => String(product.name) === gameName
  );
  const getBack = () => navigate("/", { replace: "all" });
  const {
    name,
    short_screenshots,
    background_image,
    released,
    genres,
    platforms,
    rating,
  } = selectedProduct;
  console.log(selectedProduct);
  return (
    <div className="flex">
      {/* <img
        className="w-3/4 mr-12 rounded-md"
        src={background_image}
        alt={name}
      /> */}
      <ImagesSlider images={short_screenshots} />
      <div className="ml-10">
        <h3 className="font-bold text-3xl mb-12">{name}</h3>
        <h2 className="font-bold text-2xl mb-4">About: </h2>
        <p className="font-bold text-lg mb-4">
          Released:
          <span className="ml-2 font-normal text-base">
            {released.replace("/", "-")}
          </span>
        </p>
        <div className="font-bold text-lg mb-4">
          Platforms:
          {platforms.map((platform) => {
            return (
              <span
                className="font-normal text-sm mx-2"
                key={platform.platform.id}
              >
                {platform.platform.name}
              </span>
            );
          })}
        </div>
        <div className="font-bold text-lg mb-4">
          Genres:
          {genres.map((genre) => {
            const { id, name } = genre;
            return (
              <span className="font-normal text-base mx-2" key={id}>
                {name}
              </span>
            );
          })}
        </div>
        <p className="mb-12">
          Rating: <span>{rating}</span>
        </p>
        <button
          onClick={getBack}
          className="uppercase border-2 border-white py-2 px-2 rounded-md"
        >
          Get back
        </button>
      </div>
    </div>
  );
};
