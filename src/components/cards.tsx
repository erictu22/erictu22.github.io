import { ReactNode } from "react";
import styled from "styled-components";
import { darkGradient, lightGradient } from "./typography";

export type Theme = "light" | "dark";

export const Card: React.FC<{
  readonly children?: ReactNode;
  readonly width?: number;
  readonly theme: Theme;
  readonly url : string;
}> = ({ children, width, theme, url }) => {
  return (
    <CardWrapper theme={theme} width={width} onClick={() => {
      window.open(url, '_blank')
    }}>
      {children}
    </CardWrapper>
  );
};

const CardWrapper = styled.div<{ theme?: Theme; width?: number }>`
  padding: 24px;
  margin: 4px;
  color: ${({ theme }) => (theme === "dark" ? "white" : "#303045")};
  border-radius: 12px;
  width: ${({ width }) => width}px;
  background: ${({ theme }) => (theme === "dark" ? "#303045" : "white")};
  transition: transform 0.5s ease;

  &:hover {
    background: ${({ theme }) =>
      theme === "light"
        ? lightGradient
        : darkGradient};
    cursor: pointer;
    transform: scale(1.02);
  }
`;
