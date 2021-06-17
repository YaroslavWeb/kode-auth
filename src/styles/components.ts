import styled from "styled-components";

import theme from "./theme";
import { ReactComponent as ArrowSvg } from "assets/svg/arrow.svg";
import { ReactComponent as ProfileSvg } from "assets/svg/profile.svg";

interface DividerProps {
  height?: number;
  heightMob?: number;
}

export const Divider = styled.div<DividerProps>`
  height: ${(props) => props.height || 24}px;

  @media ${(props) => props.theme.media.large} {
    height: ${(props) => props.heightMob || props.height || 12}px;
  }
`;

export const ArrowBackIcon = styled(ArrowSvg)`
  cursor: pointer;
  color: ${theme.colors.black};
  transition: 0.3s ease color;

  &:hover {
    color: ${theme.colors.primary};
  }
`;

export const ProfileIcon = styled(ProfileSvg)``;
