import styled, { css } from "styled-components";

import checkedSvg from "assets/svg/checked.svg";
import checkedDisabledSvg from "assets/svg/checked-disabled.svg";
import theme from "styles/theme";

interface StyledInputCheckboxProps {
  isDisabled: boolean;
  isError: boolean;
}

export const StyledInputCheckbox = styled.div<StyledInputCheckboxProps>`
  input {
    display: none;
    cursor: pointer;
  }

  label {
    display: inline-block;
    position: relative;
    font-size: 16px;
    line-height: 20px;
    padding-left: 32px;
    color: ${theme.colors.checkboxText};
    max-width: 100%;
    user-select: none;
  }

  label:before {
    cursor: pointer;
    position: absolute;
    left: 0;
    content: "";
    width: 24px;
    height: 24px;
    box-sizing: border-box;
    border: 2px solid
      ${(props) => (props.isError ? theme.colors.error : theme.colors.primary)};
  }

  label:after {
    cursor: pointer;
    position: absolute;
    left: 0;
    top: 0;
    content: "";
    width: 24px;
    height: 24px;

    ${(props) =>
      props.isDisabled
        ? css`
            background-image: url(${checkedDisabledSvg});
          `
        : css`
            background-image: url(${checkedSvg});
          `}
    transition: opacity 0.3s ease;
  }
  input:not(:checked) + label:after {
    opacity: 0;
  }
  input:checked + label:after {
    opacity: 1;
  }
`;
