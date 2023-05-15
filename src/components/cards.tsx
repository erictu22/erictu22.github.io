import { ReactNode } from "react";
import styled from "styled-components";

export type Theme = "light" | "dark";

export const Card: React.FC<{
  readonly children?: ReactNode;
  readonly width?: number;
  readonly theme: Theme;
}> = ({ children, width, theme }) => {
  return <CardWrapper theme={theme} width={width}>{children}</CardWrapper>;
};

const CardWrapper = styled.div<{ theme?: Theme , width?: number}>`
  padding: 24px;
  margin: 4px;
  background-color: ${({ theme }) => (theme === "dark" ? "#303045" : "white")};
  color: ${({ theme }) => (theme === "dark" ? "white" : "black")};
  border-radius: 12px;
  width: ${({width}) => width}px;
`;
