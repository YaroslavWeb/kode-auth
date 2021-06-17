import { ReactNode } from "react";

export interface IUi {
  isAuth: boolean;
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

export interface ILoader extends ILoaderProps {
  isLoading: boolean;
}

export interface ILoaderProps {
  type: "pending" | "error" | "success";
}
