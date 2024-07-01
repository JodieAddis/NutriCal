import { ChangeEvent, FormEvent, useState } from "react";
import Button from "../Button";

const Component = () => {
  const [caloriesData, setCaloriesData] = useState({
    foodCal: "",
    foodQtity: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCaloriesData((prevCaloriesData) => ({
      ...prevCaloriesData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // setTotalCal(
    //   (parseInt(caloriesData.foodCal) / 100) * parseInt(caloriesData.foodQtity)
    // );
    const totalCalories =
      (parseInt(caloriesData.foodCal) / 100) * parseInt(caloriesData.foodQtity);
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Calories per 100g:</label>
          <input
            type="text"
            name="foodCal"
            value={caloriesData.foodCal}
            onChange={handleChange}
            id="calDataInput"
          />
        </div>
        <div>
          <label>Quantity of food:</label>
          <input
            type="text"
            name="foodQtity"
            value={caloriesData.foodQtity}
            onChange={handleChange}
            id="qtityDataInput"
          />
        </div>
        <Button content="submit" css="" type="submit" />
      </form>
    </>
  );
};

export default Component;
