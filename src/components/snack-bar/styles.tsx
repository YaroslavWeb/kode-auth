import styled from "styled-components";
import { motion } from "framer-motion";
import theme from "styles/theme";

export const heightSnackBar = 64;

export const StyledSnackBar = styled(motion.div)<{ isError: boolean }>`
  position: absolute;
  width: 100%;
  top: 0;
  z-index: 100;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: ${heightSnackBar}px;
  padding: 0 16px;
  font-size: 14px;
  line-height: 20px;
  color: ${theme.colors.white};

  background: ${(props) =>
    props.isError ? theme.colors.error : theme.colors.primary};
`;

export const SnackBarIcon = styled.div`
  margin-right: 16px;
`;
