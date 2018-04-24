import React, { Component } from "react";
import "./App.css";
import axios from "axios";

class App extends Component {
  render() {
    const num2 = allPokemon[2];
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Pokemon team picker!</h1>
          <h3>"gotta catch em all!"</h3>
        </header>
        <p className="App-intro">Pick your team or create a list of your favorites!</p>
        <select>
          <option>Dragonite</option>
          <option>Umbreon</option>
          <option>Charizard</option>
          <option>Torterra</option>
          <option>Blastoise</option>
          <option>Groundon</option>
        </select>
        <button>Add to the team</button>

        <h2>My Current Team</h2>
        <div className="teamWrapper">
          <li className="team">Dragonite</li>
          <li className="team">Umbreon</li>
          <li className="team">Charizard</li>
          <li className="team">Torterra</li>
          <li className="team">Blastoise</li>
          <li className="team">Groudon</li>
        </div>
      </div>
    );
  }
}

export default App;
