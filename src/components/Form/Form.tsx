import Button from "./../Button/Button";
import Input from "./../Input/Input";
import { CustomSelect } from "../Select/CustomSelect";
import { StyledForm, Title, Text, InputContainer, Total } from "./style";
import { ITip, TipOption } from "./../../types/index";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";

const Form = () => {
  const [totalTip, setTotalTip] = useState<ITip>({
    total: 0,
    bill: "",
    tip: 10,
    persons: "",
  });
  const { total, bill, tip, persons } = totalTip;

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setTotalTip({
      ...totalTip,
      [name]: value,
    });
  };
  const handleSelect = (value: TipOption | null) => {
    if (value) {
      setTotalTip({
        ...totalTip,
        tip: value.value,
      });
    }
  };
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const totalSum = +bill + (+bill * (+tip / 100)) / +persons;
    if ({ bill } && { persons }) {
      setTotalTip({
        ...totalTip,
        total: totalSum,
      });
    }
  };

  const [isDisabled, setIsDisabled] = useState<boolean>(true);

  useEffect(() => {
    if (bill > 0 && persons > 0) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  }, [bill, persons]);

  return (
    <StyledForm onSubmit={handleSubmit}>
      <Title>Welcome to App</Title>
      <Text>Let's go calculate your tips</Text>
      <InputContainer>
        <Input
          value={bill}
          name="bill"
          placeholder="Enter bill"
          type="number"
          handleInput={handleInput}
        />
        <Input
          placeholder="Enter persons"
          name="persons"
          type="number"
          value={persons}
          handleInput={handleInput}
        />
        <CustomSelect handleSelect={handleSelect} value={tip} />
      </InputContainer>
      <Total>Total: {total.toFixed(2)}$</Total>
      <Button isDisabled={isDisabled} />
    </StyledForm>
  );
};

export default Form;
