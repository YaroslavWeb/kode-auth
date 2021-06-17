import { PropsWithChildren } from "react";

import { StyledButton } from "./styles";

interface ButtonProps {
  onClick?: () => void;
  disabled?: boolean;
  fullWidth?: boolean;
}

export function Button({
  children,
  onClick,
  disabled,
  fullWidth,
}: PropsWithChildren<ButtonProps>) {
  return (
    <StyledButton onClick={onClick} disabled={disabled} fullWidth={fullWidth}>
      {children}
    </StyledButton>
  );
}
