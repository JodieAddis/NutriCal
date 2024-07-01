import { useState } from "react";
import CaloriesCalculator from "./components/CaloriesCalculator";

function App() {
  return (
    <>
      <header>
        <h1>NutriCal</h1>
      </header>
      <main>
        <CaloriesCalculator />
        <p>Total:{} cal</p>
      </main>
      <footer></footer>
    </>
  );
}

export default App;
