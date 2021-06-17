import { createEvent, createStore, createEffect } from "effector";
import { ISnackbarProps, IUi } from "interfaces/ui";
import { signUp } from "services/auth";
import { ProfileIcon } from "styles/components";

export const openSnackBar = createEvent<ISnackbarProps>("openSnackBar");
export const closeSnackBar = createEvent("closeSnackBar");
export const startSignUp = createEvent("startSignUp");
export const completeSignUp = createEvent("completeSignUp");

export const signUpFx = createEffect<string, void>();

export const $ui = createStore<IUi>({
  isAuth: false,
  snackbar: {
    isOpen: false,
    type: "error",
    message: "",
    duration: 3000,
    icon: <ProfileIcon />,
  },
  loader: {
    isLoading: false,
    type: "pending",
  },
})
  .on(openSnackBar, (state: IUi, data: ISnackbarProps) => {
    state.snackbar = { ...data, isOpen: true };
    return { ...state };
  })
  .on(closeSnackBar, (state: IUi) => {
    state.snackbar.isOpen = false;
    return { ...state };
  })
  .on(startSignUp, (state: IUi) => {
    state.loader.type = "pending";
    state.loader.isLoading = true;
    return { ...state };
  })
  .on(completeSignUp, (state: IUi) => {
    state.loader.isLoading = false;
  })
  .on(signUpFx.doneData, (state: IUi, data: any) => {
    state.loader.type = data.status;
    state.snackbar = {
      ...state.snackbar,
      isOpen: true,
      type: data.status,
      message:
        data.status === "error"
          ? "Не удалось создать аккаунт"
          : "Аккаунт создан, выполняем вход в личный кабинет",
    };
    return { ...state };
  });

signUpFx.use(signUp);
