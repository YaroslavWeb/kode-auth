import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";

import { Extra, ExtraText, ExtraLink } from "./styles";
import { initialValuesLogin, onSumbmitLogin } from "./formik";
import { ArrowBackIcon, Divider } from "styles/components";
import { Button } from "components/button";
import { InputText } from "components/input-text";
import { getPhoneRE } from "utils/regExp";
import { getFormatedClientPhone } from "utils/formatPhone";

export enum VariantsInputLogin {
  email = "email",
  phone = "phone",
}

export function SignInPage() {
  const history = useHistory();

  const [typeInputLogin, setTypeInputLogin] = useState<VariantsInputLogin>(
    VariantsInputLogin.email
  );

  const validationSchemaLogin = Yup.object({
    login:
      typeInputLogin === VariantsInputLogin.email
        ? Yup.string()
            .trim()
            .required("Поле заполнено неверно")
            .email("Некорректный Email")
        : Yup.string()
            .trim()
            .required("Поле заполнено неверно")
            .matches(getPhoneRE(), "Некорректный номер телефона"),
  });

  const formikLogin = useFormik({
    initialValues: initialValuesLogin,
    onSubmit: onSumbmitLogin,
    validationSchema: validationSchemaLogin,
  });

  useEffect(() => {
    if (["+", "7", "8"].includes(formikLogin.values.login[0]))
      setTypeInputLogin(VariantsInputLogin.phone);
    else {
      setTypeInputLogin(VariantsInputLogin.email);
    }
  }, [formikLogin.values.login]);

  const onBlurInputLogin = () => {
    if (typeInputLogin === VariantsInputLogin.phone) {
      formikLogin.setFieldValue(
        "login",
        getFormatedClientPhone(formikLogin.values.login)
      );
    }
  };

  return (
    <>
      <Divider height={16} />
      <ArrowBackIcon onClick={() => history.goBack()} />
      <Divider height={18} />
      <InputText
        {...formikLogin.getFieldProps("login")}
        name="login"
        placeholder="Номер телефона или Email"
        onBlur={onBlurInputLogin}
        error={
          formikLogin.errors.login && formikLogin.touched.login
            ? formikLogin.errors.login
            : null
        }
      />
      <Divider height={6} />
      <Button onClick={formikLogin.submitForm} fullWidth>
        Войти
      </Button>
      <Divider height={42} />
      <Extra>
        <ExtraText>Нет аккаунта?</ExtraText>
        <ExtraLink to="/sign-up">Зарегистрируйтесь</ExtraLink>
      </Extra>
    </>
  );
}
