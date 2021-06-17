import { Switch, Route } from "react-router-dom";
import { createGlobalStyle } from "styled-components";

import MainStyles from "./styles/main";
import { AuthLayout } from "layouts/auth";
import { HomePage } from "pages/home";
import { SignInPage } from "pages/sign-in";
import { SignUpPage } from "pages/sign-up";

const GlobalStyles = createGlobalStyle`
${MainStyles}
`;

function App() {
  return (
    <>
      <Switch>
        <AuthLayout>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route exact path="/sign-in">
            <SignInPage />
          </Route>
          <Route exact path="/sign-up">
            <SignUpPage />
          </Route>
        </AuthLayout>
      </Switch>
      <GlobalStyles />
    </>
  );
}

export default App;
