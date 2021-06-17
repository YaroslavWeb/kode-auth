import { ChangeEventHandler, FocusEventHandler } from "react";

import { StyledInputText } from "./styles";

export interface InputTextProps {
  name?: string;
  type?: "text" | "tel" | "email";
  placeholder: string;
  disabled?: boolean;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  onBlur?: FocusEventHandler<HTMLInputElement>;
  value: string;
  info?: string;
  error?: string | null;
}

export const InputText = (props: InputTextProps) => {
  const {
    name,
    type = "text",
    placeholder,
    onChange,
    onBlur,
    disabled,
    value,
    info,
    error,
  } = props;

  const randomName = name || String(Math.random());

  return (
    <StyledInputText isError={Boolean(error)}>
      <input
        {...props}
        name={randomName}
        type={type}
        value={value}
        id={randomName + "_id_field"}
        disabled={disabled}
        onChange={onChange}
        onBlur={onBlur}
      />
      <label htmlFor={randomName + "_id_field"}>{placeholder}</label>
      {error ? <span>{error}</span> : info ? <span>{info}</span> : null}
    </StyledInputText>
  );
};
