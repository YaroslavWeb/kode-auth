import { PropsWithChildren } from "react";
import { AnimatePresence } from "framer-motion";
import { useStore } from "effector-react";

import { $ui } from "models/ui";
import { SnackBar } from "components/snack-bar";
import { Layout, Container } from "./styles";

interface AuthLayoutProps {}

export function AuthLayout({ children }: PropsWithChildren<AuthLayoutProps>) {
  const { snackbar } = useStore($ui);

  return (
    <Layout>
      <AnimatePresence>
        {snackbar.isOpen && (
          <SnackBar
            type={snackbar.type}
            message={snackbar.message}
            icon={snackbar.icon}
            duration={snackbar.duration}
          />
        )}
      </AnimatePresence>

      <Container>{children}</Container>
    </Layout>
  );
}
