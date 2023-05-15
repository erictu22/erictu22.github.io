import { ReactNode } from "react";
import CircleImage from "../components/circleImage";
import { FlexColumn, FlexRow } from "../components/flex";
import { GradientSpan, H2, H3, P, Title } from "../components/typography";
import { useIsMobileLayout } from "../hooks/useIsMobileLayout";

export function Home() {
  return (
    <div className="App">
      <HeaderSection />
      <ExperienceSection/>
    </div>
  );
}

const HeaderSection = () => {
  const headerSpacing = 80;
  const isMobileLayout = useIsMobileLayout();

  return (
    <SectionWrapper background="black" color="white" spacing={headerSpacing}>
      <FlexRow>
        {isMobileLayout ? null : (
          <CircleImage
            src="./profile_square.png"
            alt="A picture of Eric Tu"
            size={160}
          />
        )}
        <FlexColumn
          style={{
            marginLeft: isMobileLayout ? 0 : 60,
            justifyContent: "center",
          }}
        >
          <Title style={{ textAlign: "start", marginBottom: 24 }}>
            Hi, I'm Eric 👋
          </Title>
          <H3
            style={{ maxWidth: isMobileLayout ? 340 : 368, textAlign: "start" }}
          >
            a <GradientSpan>Front-End & Full-Stack Engineer</GradientSpan> based
            in Brooklyn, NYC 🗽
          </H3>
        </FlexColumn>
      </FlexRow>

      <FlexRow
        style={{
          marginTop: headerSpacing / 2,
          width: isMobileLayout ? 280 : undefined,
        }}
      >
        <P>This page was built using React.js and CSS styled-components</P>
      </FlexRow>
    </SectionWrapper>
  );
};

const ExperienceSection = () => {

  return <SectionWrapper background='white' color='black' spacing={60}>
    <H2>Experience</H2>
  </SectionWrapper>
};

const SectionWrapper: React.FC<{
  children?: ReactNode;
  background: string;
  color: string;
  spacing: number;
}> = (props) => {
  return (
    <FlexColumn
      style={{
        alignItems: "center",
        paddingTop: props.spacing,
        paddingBottom: props.spacing,
        backgroundColor: props.background,
        color: props.color,
      }}
    >
      {props.children}
    </FlexColumn>
  );
};
