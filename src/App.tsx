import React from "react";
import "./App.css";
import DataUserService from "./services/dataUser.service";

function App() {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");

  const submit = () => {
    DataUserService.getLogin(username, password).then((res) => {
      if (res.type !== "") {
        window.location.href = "https://face-detection-camera.herokuapp.com";
      } else {
        alert("Username or password is incorrect");
      }
    });
  };

  return (
    <div className="App">
      <header className="App-header">
        <input
          type="username"
          placeholder="username"
          value={username}
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />
        <input
          type="password"
          placeholder="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <button onClick={submit}>login</button>
      </header>
    </div>
  );
}

export default App;
