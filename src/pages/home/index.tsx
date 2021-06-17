import { useState } from "react";
import { useHistory } from "react-router-dom";

import { Button } from "components/button";
import { Divider } from "styles/components";
import { Loader } from "components/loader";

export function HomePage() {
  const history = useHistory();
  const [isDisabled, setDisabled] = useState(false);
  const [typeLoader, setTypeLoader] = useState(0);

  const handleRedirect = (to: string) => {
    history.push(to);
  };

  return (
    <>
      <Divider height={40} />
      <Button onClick={handleRedirect.bind(null, "/sign-up")} fullWidth>
        Регистрация
      </Button>
      <Divider height={16} />
      <p>
        Ребята, я накоекакал. На 5 часу кодинга я понял, что нужно делать 2.0 -
        2.6 экраны 😻😿
      </p>
      <Divider height={16} />
      <Loader
        type={!typeLoader ? "pending" : typeLoader === 1 ? "error" : "success"}
      />
      <Divider height={16} />

      <Button
        onClick={handleRedirect.bind(null, "/sign-in")}
        fullWidth
        disabled={isDisabled}
      >
        Войти
      </Button>
      <Divider height={16} />
      <Button
        fullWidth
        onClick={() => {
          setDisabled((prev) => !prev);
          setTypeLoader((prev) => (prev === 2 ? 0 : ++prev));
        }}
      >
        ПЕРЕКЛЮЧАШКА
      </Button>
      <Divider height={16} />
    </>
  );
}
