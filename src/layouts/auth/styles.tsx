import styled from "styled-components";
import theme from "styles/theme";

export const Layout = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const Container = styled.div`
  width: 420px;
  box-shadow: 0px 2px 12px rgba(74, 12, 25, 0.02),
    0px 5px 40px rgba(16, 18, 83, 0.08), 0px 5px 52px rgba(55, 55, 65, 0.02);
  border-radius: 12px;
  padding: 48px 40px;

  @media ${theme.media.medium} {
    align-self: flex-start;
    width: 100%;
    height: 100%;
    padding: 0 16px;
    box-shadow: none;
    border-radius: 0;
  }
`;
