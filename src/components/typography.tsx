import styled from "styled-components";

interface TextProps {
    readonly align? : 'start' | 'center';
    readonly bold? : boolean;
    readonly color? : string;
}

export const Title = styled.h1<TextProps>`
  margin: 0;
  font-size: 56px;
  text-align: ${({align}) => align};
  color: ${({color}) => color};
`;

export const H2 = styled.h2<TextProps>`
  margin: 0;
  font-size: 40px;
  text-align: ${({align}) => align};
  color: ${({color}) => color};
`;

export const H3 = styled.h3<TextProps>`
  margin: 0;
  font-size: 24px;
  font-weight: 600;
  text-align: ${({align}) => align};
  line-height: 36px;
  color: ${({color}) => color};
`;

export const H4 = styled.h3<TextProps>`
  margin: 0;
  font-size: 20px;
  font-weight: 600;
  text-align: ${({align}) => align};
  color: ${({color}) => color};
`;

export const P = styled.p<TextProps>`
  margin: 0;
  text-align: ${({align}) => align};
  font-weight: ${({bold}) => bold ? 'bold' : undefined};
  line-height: 24px;
`;

export const GradientSpan = styled.span`
  display: inline;
  background: linear-gradient(to right, #30cfd0 0%, #03fca1 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;
