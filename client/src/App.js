import './App.css';
import axios from "axios";
import React, { useState } from "react";

function App() {

  const [username, setUsername] = useState("");

  const handleLogin = (event) => {
    event.preventDefault();
    const data = { username: username }
    axios.post("http://localhost:3001/auth", data).then((response) => {
      console.log(response.data);
    });
  };

  return (
    <div className="App">
      <div className="background">
        <div className="shape"></div>
        <div className="shape"></div>
      </div>
      <form onSubmit={handleLogin}>
        <h3 className="name"> Clinique LE CHATELET</h3>
        <h3> Bienvenue !</h3>

        <label htmlFor="username">Nom d'utilisateur</label>
        <input
          type="text"
          placeholder="Nom d'utilisateur"
          id="username"
          onChange={(event) => {
            setUsername(event.target.value);
          }}
        />

        <label htmlFor="password">Mot de passe</label>
        <input type="password" placeholder="Mot de passe" id="password" />

        <button type="submit">Connexion</button>
      </form>
    </div >
  );
}

export default App;
