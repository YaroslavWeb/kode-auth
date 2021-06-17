import { motion } from "framer-motion";
import { rgba } from "polished";
import styled from "styled-components";

import theme from "styles/theme";

export const StyledLoader = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  width: 56px;
  height: 56px;
  border-radius: 50%;
  color: ${theme.colors.white};
`;

export const Path = (props: any) => (
  <motion.path
    fill={rgba(theme.colors.white, 0)}
    strokeWidth="3"
    strokeLinecap="round"
    stroke={theme.colors.white}
    {...props}
  />
);
export const PathLoader = (props: any) => (
  <motion.path
    fill={theme.colors.primary}
    strokeWidth="3"
    strokeLinecap="round"
    stroke={theme.colors.primary}
    {...props}
  />
);
