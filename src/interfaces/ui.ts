import { ReactNode } from "react";

export interface IUi {
  snackbar: ISnackbar;
  loader: ILoader;
}

export interface ISnackbar extends ISnackbarProps {
  isOpen: boolean;
}

export interface ISnackbarProps {
  type: "error" | "success";
  message: string;
  duration?: number;
  icon: ReactNode;
}

export interface ILoader {
  isLoading: boolean;
  type: "pending" | "error" | "success";
}
