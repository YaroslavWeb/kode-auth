import { ChangeEventHandler, ReactNode } from "react";

import { StyledInputCheckbox } from "./styles";

interface InputCheckboxProps {
  name?: string;
  checked?: boolean;
  text?: ReactNode;
  onClick?: () => void;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  disabled?: boolean;
  error?: string | null;
}

export function InputCheckbox(props: InputCheckboxProps) {
  const { name, checked, text, onChange, onClick, disabled, error } = props;
  // const [isChecked, setIsChecked] = useState(false);

  // const toggleCheckbox = () => {
  //   setIsChecked((prev) => !prev);
  // };
  const randomName = name || String(Math.random());

  return (
    <StyledInputCheckbox
      isDisabled={disabled || false}
      isError={Boolean(error) || false}
    >
      <input
        {...props}
        disabled={disabled}
        type="checkbox"
        name={randomName}
        id={randomName + "_id_checkbox"}
        checked={checked}
        onClick={onClick}
        onChange={onChange}
      />
      <label htmlFor={randomName + "_id_checkbox"}>{text}</label>
    </StyledInputCheckbox>
  );
}
