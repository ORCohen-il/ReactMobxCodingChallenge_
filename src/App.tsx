import React from "react";
import logo from "./logo.svg";
import "./App.css";
import EditUser from "./Components/EditUser/EditUser";
import DisplayUsername from "./Components/DisplayUsername/DisplayUsername";
import Header from "./Components/Header/Header";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="body">
      <DisplayUsername />
      <EditUser />

      </div>
    </div>
  );
}

export default App;
