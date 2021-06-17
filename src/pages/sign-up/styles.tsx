import styled from "styled-components";

export const Header = styled.div`
  display: flex;
  align-items: center;
`;

export const HeaderTitle = styled.span`
  margin-left: 16px;
  color: ${(props) => props.theme.colors.black};
  font-size: 20px;
  line-height: 32px;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  // 68px - url header on mobile
  height: calc(100% - 68px);
`;

export const TopSection = styled.div``;
export const BottomSection = styled.div``;
