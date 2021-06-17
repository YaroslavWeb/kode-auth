import { Variants } from "framer-motion";
import theme from "styles/theme";

export const loaderVariants: Variants = {
  pending: {
    background: theme.colors.primary,
  },

  error: {
    background: theme.colors.error,
  },

  success: {
    background: theme.colors.primary,
  },
};

export const circleCords = "m -10 0 a 8 8 0 1 0 20 0 a 8 8 0 1 0 -20 0";

export const statusVariantsFirst: Variants = {
  pending: {
    d: ["M 12 12" + circleCords, "M 12 12" + circleCords],
  },

  error: { d: "M 2 2 L 22 22" },
  success: { d: "M 4 13 L 12 22" },
};

export const statusVariantsSecond: Variants = {
  pending: {
    d: "M -24 -24 L -24 -24",
  },
  error: {
    d: "M 22 2 L 2 22",
  },
  success: {
    d: "M 22 2 L 12 22",
  },
};

export const statusVariantsThird: Variants = {
  pending: {
    d: [
      "M 0 0" + circleCords,
      "M 24 0" + circleCords,
      "M 24 24" + circleCords,
      "M 0 24" + circleCords,
      "M 0 0" + circleCords,
    ],
    stroke: theme.colors.primary,
    fill: theme.colors.primary,
    transition: {
      repeat: Infinity,
      duration: 0.8,
      ease: "linear",
    },
  },
  error: {
    d: "M -24 -24",
  },
  success: {
    d: "M -24 -24",
  },
};
