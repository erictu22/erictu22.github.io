import { ReactNode } from "react";
import styled, { CSSProperties } from "styled-components";
import { Theme } from "./cards";

export const lightGradient =
  "linear-gradient(to right, #30cfd0 0%, #03fca1 100%)";
export const darkGradient =
  "linear-gradient(to right, #336699 0%, #66ccff 100%)";
export const linkGradient =
  "linear-gradient(to right, #00BFFF 0%, #00FFFF 100%)";
interface TextProps {
  readonly align?: "start" | "center";
  readonly bold?: boolean;
  readonly color?: string;
}

export const Title = styled.h1<TextProps>`
  margin: 0;
  font-size: 56px;
  text-align: ${({ align }) => align};
  color: ${({ color }) => color};
`;

export const H2 = styled.h2<TextProps>`
  margin: 0;
  font-size: 40px;
  text-align: ${({ align }) => align};
  color: ${({ color }) => color};
`;

export const H3 = styled.h3<TextProps>`
  margin: 0;
  font-size: 24px;
  font-weight: 600;
  text-align: ${({ align }) => align};
  line-height: 36px;
  color: ${({ color }) => color};
`;

export const H4 = styled.h3<TextProps>`
  margin: 0;
  font-size: 20px;
  font-weight: 600;
  text-align: ${({ align }) => align};
  color: ${({ color }) => color};
`;

export const P = styled.p<TextProps>`
  margin: 0;
  text-align: ${({ align }) => align};
  font-weight: ${({ bold }) => (bold ? "bold" : undefined)};
  line-height: 24px;
`;

export const ThemedGradientSpan: React.FC<{
  children?: ReactNode;
  theme: Theme;
  style?: CSSProperties;
}> = ({ children, theme, style }) => {
  return (
    <GradientSpan
      gradient={theme === "light" ? lightGradient : darkGradient}
      style={style}
    >
      {children}
    </GradientSpan>
  );
};

export const GradientSpan = styled.span<{ gradient: string }>`
  display: inline;
  background: ${({ gradient }) => gradient};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const LinkSpan: React.FC<{ children?: ReactNode; url: string }> = ({
  children,
  url,
}) => {
  return (
    <GradientSpan
      gradient={linkGradient}
      style={{ cursor: "pointer" }}
      onClick={() => {
        window.open(url)
      }}
    >
      {children}
    </GradientSpan>
  );
};
