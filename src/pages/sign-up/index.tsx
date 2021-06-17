import { useEffect, useState } from "react";
import { useFormik } from "formik";
import { useStore } from "effector-react";
import { Link, useHistory } from "react-router-dom";

import {
  Header,
  HeaderTitle,
  Wrapper,
  TopSection,
  BottomSection,
} from "./styles";
import { $ui, openSnackBar } from "models/ui";
import { initialValuesReg, onSumbmitReg, validationSchemaReg } from "./formik";
import { InputText } from "components/input-text";
import { Button } from "components/button";
import { InputCheckbox } from "components/input-checkbox";
import { Loader } from "components/loader";
import { ArrowBackIcon, Divider, ProfileIcon } from "styles/components";
import { getFormatedClientPhone } from "utils/formatPhone";

export function SignUpPage() {
  const { snackbar } = useStore($ui);
  const history = useHistory();
  const [isLoading, setLoading] = useState(false);

  const formikReg = useFormik({
    initialValues: initialValuesReg,
    onSubmit: onSumbmitReg,
    validationSchema: validationSchemaReg,
  });

  const onBlurInputPhone = () => {
    formikReg.setFieldValue(
      "phone",
      getFormatedClientPhone(formikReg.values.phone)
    );
  };

  useEffect(() => {
    if (formikReg.errors.checkbox && formikReg.isSubmitting) {
      openSnackBar({
        message: formikReg.errors.checkbox,
        type: "error",
        icon: <ProfileIcon />,
        duration: 3000,
      });
    }
  }, [formikReg.errors.checkbox, formikReg.isSubmitting]);

  return (
    <Wrapper>
      <TopSection>
        <Divider height={12} />
        <Header>
          <ArrowBackIcon onClick={() => history.goBack()} />{" "}
          <HeaderTitle>Регистрация в Utair</HeaderTitle>
        </Header>
        {/* Пасхальное яйцо от дизайнера */}
        <Divider height={snackbar.isOpen ? 24 : 14} />
        <InputText
          {...formikReg.getFieldProps("phone")}
          name="phone"
          type="tel"
          placeholder="Номер телефона"
          onBlur={onBlurInputPhone}
          info="Укажите ваш номер телефона. Он будет использоваться для входа в приложение"
          error={
            formikReg.errors.phone && formikReg.touched.phone
              ? formikReg.errors.phone
              : null
          }
        />
        <Divider height={14} />
      </TopSection>
      {isLoading && <Loader type={"success"} />}
      <BottomSection>
        <Divider height={14} />
        <InputCheckbox
          {...formikReg.getFieldProps("checkbox")}
          name="checkbox"
          text={<InputCheckboxText />}
          error={
            formikReg.errors.checkbox && formikReg.touched.checkbox
              ? formikReg.errors.checkbox
              : null
          }
        />
        <Divider height={16} />
        <Button fullWidth onClick={formikReg.submitForm}>
          Продолжить
        </Button>
        <Divider height={16} />
      </BottomSection>
    </Wrapper>
  );
}

const InputCheckboxText = () => (
  <>
    Я ознакомлен с{" "}
    <Link to="#">условиями использования моих персональных данных </Link> и даю{" "}
    <Link to="#">согласие</Link> на их обработку
  </>
);
