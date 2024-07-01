import { ReactNode } from "react";

interface InputCalories {
  id: string;
  inputName: ReactNode | string;
  css: string;
}

const Component = ({ id, inputName }: InputCalories) => {
  return (
    <div className="flex flex-col">
      <label>{inputName}</label>
      <input type="number" id={id} />
    </div>
  );
};

export default Component;
