import styled from "styled-components";
import theme from "styles/theme";

interface StyledInputTextProps {
  isError: boolean;
}

export const StyledInputText = styled.div<StyledInputTextProps>`
  width: 100%;
  position: relative;
  box-sizing: border-box;
  margin: 20px 0 22px 0;
  color: ${theme.colors.black};
  cursor: text;

  & > input {
    width: 100%;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 24px;
    padding-bottom: 8px;
    border: none;
    border-bottom: 1px solid
      ${(props) => (props.isError ? theme.colors.error : theme.colors.font)};
    transition: 0.3s ease border-bottom-color;
    background-color: transparent;
    outline: 0;

    &::placeholder {
      color: transparent !important;
      opacity: 0 !important;
    }

    &:focus {
      border-bottom-color: ${(props) =>
        props.isError ? theme.colors.error : theme.colors.primary};
    }

    &:not(:placeholder-shown),
    &:focus {
      ~ label {
        top: -16px;
        font-size: 12px;
        outline: 0;
        line-height: 16px;
        transform: translateY(0);
        color: ${(props) =>
          props.isError ? theme.colors.error : theme.colors.font};
      }
    }

    &:disabled {
      border-bottom-color: ${theme.colors.primaryLight};
    }
  }

  & > label {
    position: absolute;
    left: 0;
    top: 0;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 24px;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    color: ${theme.colors.font};
    pointer-events: none;
    transition: 0.3s ease top, 0.3s ease color, 0.3s ease font-size;
  }

  & > span {
    position: absolute;
    top: 37px;
    left: 0;
    color: ${(props) =>
      props.isError ? theme.colors.error : theme.colors.font};
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 16px;
  }
`;
