import { useEffect } from "react";

import { closeSnackBar } from "models/ui";
import { ISnackbarProps } from "interfaces/ui";
import { heightSnackBar, StyledSnackBar, SnackBarIcon } from "./styles";

export function SnackBar({
  type,
  message,
  duration = 3000,
  icon,
}: ISnackbarProps) {
  useEffect(() => {
    setTimeout(closeSnackBar, duration);
  }, [duration]);

  return (
    <StyledSnackBar
      isError={type === "error"}
      initial={{ top: -heightSnackBar }}
      animate={{ top: 0 }}
      exit={{ top: -heightSnackBar }}
    >
      <SnackBarIcon>{icon}</SnackBarIcon>
      <p>{message}</p>
    </StyledSnackBar>
  );
}
