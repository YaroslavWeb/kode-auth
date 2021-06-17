import * as Yup from "yup";
import { getPhoneRE } from "utils/regExp";
import { signUpFx, startSignUp, completeSignUp } from "models/ui";
import { getFormatedServerPhone } from "utils/formatPhone";

interface IRegFormik {
  phone: string;
  checkbox: boolean;
}

export const initialValuesReg: IRegFormik = { phone: "", checkbox: false };
export const onSumbmitReg = async (values: IRegFormik) => {
  const formatedPhone = getFormatedServerPhone(values.phone);
  startSignUp();
  await signUpFx(formatedPhone);
  setTimeout(() => completeSignUp(), 3000);
};

export const validationSchemaReg = Yup.object({
  phone: Yup.string()
    .trim()
    .required("Поле заполнено неверно")
    .matches(getPhoneRE(), "Некорректный номер телефона"),

  checkbox: Yup.bool().oneOf(
    [true],
    "Чтобы создать аккаунт, Utair нужно ваше согласие на обработку данных"
  ),
});
