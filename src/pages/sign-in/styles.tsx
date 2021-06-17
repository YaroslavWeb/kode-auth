import { Link } from "react-router-dom";
import styled from "styled-components";

import theme from "styles/theme";

export const Extra = styled.div`
  font-size: 14px;
  line-height: 24px;
`;

export const ExtraText = styled.p`
  color: ${theme.colors.font};
`;

export const ExtraLink = styled(Link)`
  color: ${theme.colors.primary};
`;
