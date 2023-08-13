import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {

  const [isOn, setIsOn] = useState(false);
  const appClass = isOn ? "App dark" : "App light";

  function handleClick() {
    setIsOn((isOn) => !isOn)
  }

  

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={handleClick}>{isOn ? "Dark Mode" : "Light Mode"}</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
