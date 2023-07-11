import { Component } from "react";
import { addGameToCart } from "../../reducer/cartSlice";
import { setAllGames } from "../../reducer/gamesSlice";
import RawgService from "../../services/rawg-services";
import { GameItem } from "../../components/game-item/game-item.jsx";
export default class GamesPage extends Component {
  rawg = new RawgService();
  state = {
    gamesList: [],
  };
  componentDidMount() {
    this.rawg
      .getAllGames()
      // .then((msg) => console.log(msg))
      // .then((data) => setAllGames(data));
      .then((itemsList) => {
        this.setState({
          gamesList: itemsList,
        });
      });

    //this.rawg.getAllGames().then((data) => console.log(data));
  }

  render() {
    const { gamesList } = this.state;

    return (
      <div className="games">
        <h3 className="mb-6 text-4xl font-bold">Best of all time</h3>
        <ul className="grid grid-cols-3 gap-12">
          {gamesList.map(({ id, name, background_image, genres, rating }) => {
            return (
              <GameItem
                id={id}
                key={name}
                name={name}
                background_image={background_image}
                genres={genres}
                rating={rating}
                btnText={"Add to cart +"}
                dispatchFunc={addGameToCart}
              />
            );
          })}
        </ul>
      </div>
    );
  }
}
