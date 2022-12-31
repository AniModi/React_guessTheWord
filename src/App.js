import './App.css';
import React from 'react';
import Home from './pages/home/home';
import Themes from './pages/themes/themes';
import Game from './pages/game/game';
import Result from "./pages/result/result"
import { BrowserRouter, Route } from 'react-router-dom';

const App = ()  => {
  return (
    <>
    <BrowserRouter>
    <Route exact path={"/"}>
      <Home></Home>
    </Route>
    <Route path={"/choose-theme"}>
      <Themes></Themes>
    </Route>
    <Route path={"/play"}>
      <Game></Game>
    </Route>
    <Route exact path={"/result"}>
      <Result></Result>
    </Route>
    </BrowserRouter>
    </>
  );
}

export default App;
