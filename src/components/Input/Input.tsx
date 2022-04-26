import { ChangeEvent } from "react";
import { StyledInput } from "./style";

interface IInput {
  placeholder: string;
  name: string;
  value: string | number;
  type: string;
  handleInput: (e: ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({ placeholder, name, value, type, handleInput }: IInput) => {
  return (
    <StyledInput
      name={name}
      placeholder={placeholder}
      value={value}
      type={type}
      onChange={handleInput}
    />
  );
};

export default Input;
