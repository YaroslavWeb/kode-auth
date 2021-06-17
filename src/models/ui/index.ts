import { createEvent, createStore, createEffect, restore } from "effector";
import { ISnackbarProps, IUi } from "interfaces/ui";
import { signUp } from "services/auth";

export const openSnackBar = createEvent<ISnackbarProps>("openSnackBar");
export const closeSnackBar = createEvent("closeSnackBar");

export const signUpFx = createEffect<string, void, Error>();

export const $fetchError = restore<Error>(signUpFx.failData, null);

export const $ui = createStore<IUi>({
  snackbar: {
    isOpen: false,
    type: "error",
    message: "",
    duration: 3000,
    icon: null,
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
  .on(signUpFx.doneData, (_, data) => data);

signUpFx.use(signUp);
