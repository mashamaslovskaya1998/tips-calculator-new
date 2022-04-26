import { TipOption } from "../../types/index";
import Select from "react-select";
import { StylesConfig } from "react-select";

interface ISelect {
  handleSelect: (options: TipOption | null) => void;
  value: TipOption["value"];
}

export const CustomSelect = ({ handleSelect, value }: ISelect) => {
  const options: TipOption[] = [
    { value: 10, label: "10%" },
    { value: 15, label: "15%" },
    { value: 20, label: "20%" },
  ];

  const customStyles: StylesConfig<TipOption> = {
    option: (provided, state) => ({
      ...provided,
      borderRadius: "30px",
      cursor: "pointer",
    }),
    control: (provided) => ({
      ...provided,
      padding: "15px 10px",

      borderRadius: "50px",
      border: "none",

      cursor: "pointer",
    }),
    singleValue: (provided) => ({
      ...provided,
      textAlign: "center",
      fontSize: "18px",
      lineheight: "26px",

      color: "rgba(117, 108, 108, 0.6)",
    }),
  };
  return (
    <Select
      options={options}
      onChange={handleSelect}
      styles={customStyles}
      value={options.find((item) => item.value === value)}
      defaultValue={options[0]}
      isMulti={false}
    />
  );
};
