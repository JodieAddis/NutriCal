import "../public/style/index.css";
import CaloriesCalculator from "./components/CaloriesCalculator";
import Heading from "./typographies/Heading";

function App() {
  return (
    <>
      <header className="flex flex-row justify-between px-10 py-5 border-b-black border-solid border-[1px] bg-green-700 text-white">
        <Heading kind="h1" content="NutriCal" css="font-bold text-3xl" />
        <p>NavBar</p>
      </header>
      <main className="mt-20 flex justify-center">
        <CaloriesCalculator />
      </main>
      <footer></footer>
    </>
  );
}

export default App;
