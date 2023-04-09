import React from "react";
import logo from "./logo.svg";
//import "./App.scss";
import Button from "./components/Button/Button";
import Icon from "./components/Icon/Icon";
import Input from "./components/Input/Input";

function App() {
  return (
    <div className="App">
      <Button label="Test UI" />
      <Icon name="cross" size={24} />
      <Input label="User Name" />
    </div>
  );
}

export default App;
