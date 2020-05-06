import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Play from "./components/Play";
import Landing from "./components/Landing";
import Gamemode from "./components/Gamemode";
import JoinOrCreateGame from "./components/JoinOrCreateGame";
import CreateGame from "./components/CreateGame";
import Board from "./components/Board";
import JoinGame from "./components/JoinGame";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Switch>
            <Route path='/' component={Landing} exact />
            <Route path='/play' component={Play} />
            <Route path='/gamemode' component={Gamemode} />
            <Route path='/join-or-create' component={JoinOrCreateGame} />
            <Route path='/create-a-game' component={CreateGame} />
            <Route path='/game/:id' component={Board} />
            <Route path='/join-game' component={JoinGame} />
            <Route component={Error} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
