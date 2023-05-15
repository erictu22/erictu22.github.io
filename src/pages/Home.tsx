import { ReactNode } from "react";
import { Card, Theme } from "../components/cards";
import CircleImage from "../components/circleImage";
import { FlexColumn, FlexRow } from "../components/flex";
import { GradientSpan, H2, H3, H4, P, Title } from "../components/typography";
import { useIsMobileLayout } from "../hooks/useIsMobileLayout";

export function Home() {
  return (
    <div className="App">
      <HeaderSection />
      <ExperienceSection />
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
          <Title style={{ textAlign: "start", marginBottom: 16 }}>
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
  const spacing = 80;
  const cardTheme: Theme = "dark";
  return (
    <SectionWrapper background="white" color="black" spacing={spacing}>
      <H2>Experience</H2>
      <FlexColumn style={{ width: 700 }}>
        <FlexRow style={{ marginTop: spacing / 2 }}>
          <Card theme={cardTheme}>
            <H3 align="start">Convo</H3>
            <P align="start" bold style={{ marginTop: 4, marginBottom: 4 }}>
              Founder / CTO
            </P>
            <P align="start">
              Launched a mobile app that lets you practice your favorite second
              language with ChatGPT
            </P>
          </Card>
          <Card theme={cardTheme}>
            <H3 align="start">Shortwave</H3>
            <P align="start" bold style={{ marginTop: 4, marginBottom: 4 }}>
              Full-Stack Engineer
            </P>
            <P align="start">
              Worked with ex-Googlers & ex-founders of Firebase to build an
              AI-powered email client
            </P>
          </Card>
        </FlexRow>
        <FlexRow>
        <Card theme={cardTheme}>
            <H3 align="start">DMI</H3>
            <P align="start" bold style={{ marginTop: 4, marginBottom: 4 }}>
              Software Engineer
            </P>
            <P align="start">
              Developed data population scripts for AT&T
            </P>
          </Card>
          <Card theme={cardTheme}>
            <H3 align="start">Raytheon</H3>
            <P align="start" bold style={{ marginTop: 4, marginBottom: 4 }}>
              Software Engineer Intern
            </P>
            <P align="start">
              Developed memory back-up drivers that are used in the Boeing 777x
              today
            </P>
          </Card>
        </FlexRow>
      </FlexColumn>
    </SectionWrapper>
  );
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
