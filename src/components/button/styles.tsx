import styled from "styled-components";
import { darken } from "polished";

import theme from "styles/theme";

export const StyledButton = styled.button<{ fullWidth?: boolean }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 16px 24px;
  user-select: none;
  position: relative;
  white-space: nowrap;
  font-size: 16px;
  line-height: 24px;
  background: ${theme.colors.primary};
  color: ${theme.colors.white};
  border: none;
  cursor: pointer;
  transition: 0.3s ease background;

  width: ${(props) => (props.fullWidth ? "100%" : "auto")};

  &:hover {
    background: ${darken(0.05, theme.colors.primary)};
  }

  &:active {
    background: ${darken(0.1, theme.colors.primary)};
  }

  &:disabled {
    cursor: default;
    background: ${theme.colors.primaryLight};
  }
`;
