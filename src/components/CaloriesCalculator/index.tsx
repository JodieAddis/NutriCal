import { ChangeEvent, FormEvent, useState } from "react";
import Button from "../Button";

const Component = () => {
  const [caloriesData, setCaloriesData] = useState({
    foodCal: "",
    foodQtity: "",
  });
  const [totalCal, setTotalCal] = useState<number>(0);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCaloriesData((prevCaloriesData) => ({
      ...prevCaloriesData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setTotalCal(
      (parseInt(caloriesData.foodCal) / 100) * parseInt(caloriesData.foodQtity)
    );
  };
  return (
    <div className="flex flex-col">
      <form onSubmit={handleSubmit} className="flex flex-row">
        <div className="mr-10">
          <label>Calories per 100g:</label>
          <input
            type="text"
            name="foodCal"
            value={caloriesData.foodCal}
            onChange={handleChange}
            id="calDataInput"
            className="ml-4 border-black border-solid border-[1px]"
          />
        </div>
        <div className="mr-10">
          <label>Quantity of food:</label>
          <input
            type="text"
            name="foodQtity"
            value={caloriesData.foodQtity}
            onChange={handleChange}
            id="qtityDataInput"
            className="ml-4 border-black border-solid border-[1px]"
          />
        </div>
        <Button
          content="submit"
          css="px-10 py-1 bg-yellow-500 text-white capitalize rounded-lg"
          type="submit"
        />
      </form>
      <p className="text-center mt-10 text-xl">Total: {totalCal} cal</p>
    </div>
  );
};

export default Component;
