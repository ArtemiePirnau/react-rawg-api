import { Component } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AsideMenu } from "../aside-menu/aside-menu.jsx";
import { MainPage } from "../../pages/main/main.jsx";
import { Header } from "../header/header.jsx";
import { SignIn } from "../../pages/signin/signin.jsx";
import { Cart } from "../../pages/cart/cart.jsx";
import { OneGame } from "../../pages/one-game/one-game.jsx";

import "../../index.scss";

const Content = () => {
  return (
    <div className="flex justify-between">
      <AsideMenu />
      <MainPage />
    </div>
  );
};

export default class App extends Component {
  //TODO: https://api.rawg.io/api/games?key=6ea7cccd9c744715b1125a6d369f89e6&page=2
  //TODO: https://dribbble.com/shots/20212518-MonkeyGames-App-Design
  //TODO: https://reactjsexample.com/game-store-using-rawg-api-and-react/
  //TODO: https://stackblitz.com/edit/framer-motion-slider?file=index.js - SLIDER
  render() {
    return (
      <div className="font-press-start bg-main text-white min-h-screen px-12 pt-6">
        <Router>
          <Header />
          <Routes>
            <Route exact path="/" element={<Content />} />
            <Route exact path="/signin" element={<SignIn />} />
            <Route exact path="/cart" element={<Cart />} />
            <Route exact path="/:gameName" element={<OneGame />} />
          </Routes>
        </Router>
      </div>
    );
  }
}
