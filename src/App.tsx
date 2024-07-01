import { ChangeEvent, FormEvent, useState } from "react";
import Button from "./components/Button";

function App() {
  const [calData, setCalData] = useState<number>(0);
  const [quantity, setQuantity] = useState<number>(0);
  const [totalCal, setTotalCal] = useState<number>(0);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCalData(parseInt(e.target.value));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setTotalCal((calData / 100) * quantity);
  };

  return (
    <>
      <header>
        <h1>NutriCal</h1>
      </header>
      <main>
        <form onSubmit={handleSubmit}>
          <label>Number of calories per 100g</label>
          <input
            type="text"
            value={calData}
            onChange={handleChange}
            id="calDataInput"
          />
          <Button content="submit" css={""} type="submit" />
        </form>
        <p>{totalCal} cal</p>
      </main>
      <footer></footer>
    </>
  );
}

export default App;
