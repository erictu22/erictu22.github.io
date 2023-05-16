import { ReactNode } from "react";
import { Card, Theme } from "../components/cards";
import CircleImage from "../components/circleImage";
import { FlexColumn, FlexRow } from "../components/flex";
import { Socials } from "../components/socials";
import { ThemedGradientSpan, H2, H3, H4, LinkSpan, P, Title } from "../components/typography";
import { useIsMobileLayout } from "../hooks/useIsMobileLayout";

export function Home() {
  return (
    <div className="App">
      <HeaderSection />
      <ExperienceSection />
      <ProjectSection/>
      <WorkWithMeSection/>
    </div>
  );
}

const HeaderSection = () => {
  const headerSpacing = 120;
  const isMobileLayout = useIsMobileLayout();

  return (
    <SectionWrapper theme='dark' spacing={headerSpacing}>
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
            a <ThemedGradientSpan theme='light'>Front-End & Full-Stack Engineer</ThemedGradientSpan> based
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
        <P>This page was built using <LinkSpan url='https://github.com/erictu22/erictu22.github.io'>React.js and CSS styled-components</LinkSpan></P>
      </FlexRow>
    </SectionWrapper>
  );
};

const ExperienceSection = () => {
  const spacing = 120;
  const cardTheme: Theme = "dark";
  const isMobileLayout = useIsMobileLayout();
  return (
    <SectionWrapper theme='light' spacing={spacing}>
      <H2>Experience</H2>
      <FlexColumn style={{ width: isMobileLayout ? undefined : 700 }}>
        <FlexRow style={{ marginTop: spacing / 2 }} wrap={isMobileLayout}>
          <Card theme={cardTheme} url='https://apps.apple.com/app/id6447978247'>
            <H3 align="start">Convo</H3>
            <P align="start" bold style={{ marginTop: 4, marginBottom: 4 }}>
              Founder
            </P>
            <P align="start">
              Built and launched a mobile app that lets you practice your favorite second
              language with ChatGPT
            </P>
          </Card>
          <Card theme={cardTheme} url='https://www.shortwave.com/'>
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
        <FlexRow wrap={isMobileLayout}>
        <Card theme={cardTheme} url='https://dminc.com/'>
            <H3 align="start">DMI</H3>
            <P align="start" bold style={{ marginTop: 4, marginBottom: 4 }}>
              Software Engineer
            </P>
            <P align="start">
              Developed data population scripts for AT&T
            </P>
          </Card>
          <Card theme={cardTheme} url='https://www.rtx.com/'>
            <H3 align="start">Raytheon</H3>
            <P align="start" bold style={{ marginTop: 4, marginBottom: 4 }}>
              Software Engineer Intern
            </P>
            <P align="start">
              Developed memory back-up drivers used in the Boeing 777x
            </P>
          </Card>
        </FlexRow>
      </FlexColumn>
    </SectionWrapper>
  );
};

const ProjectSection = () => {
  const spacing = 70;
  const cardTheme: Theme = "light";
  const isMobileLayout = useIsMobileLayout();

  return (
    <SectionWrapper theme='dark' spacing={spacing}>
      <H2>Projects</H2>
      <FlexColumn style={{ width: isMobileLayout ? undefined : 700 }}>
        <FlexRow style={{ marginTop: spacing / 2 , overflow: 'auto'}} wrap={isMobileLayout}>
          <Card theme={cardTheme} url='https://www.linkedin.com/posts/activity-7062608380481138688-xou1?utm_source=share&utm_medium=member_desktop'>
            <H3 align="start">Automated Video Editor</H3>
            <P align="start">
              a suite of Python scripts that uses image recognition to edit YouTube videos
            </P>
          </Card>
          <Card theme={cardTheme} url='https://apps.apple.com/ma/app/pictojump/id1613057956'>
            <H3 align="start">PictoJump</H3>
            <P align="start">
              an iOS mobile game that turns your phone's photo library into a platformer game
            </P>
          </Card>
        </FlexRow>
        <FlexRow wrap={isMobileLayout}>
        <Card theme={cardTheme} url='https://devpost.com/software/puppet-io'>
            <H3 align="start">Puppet.io</H3>
            <P align="start">
              an image recognition game that won the 2021 MakeHarvard Hack-a-thon
            </P>
          </Card>
        </FlexRow>
      </FlexColumn>
    </SectionWrapper>
  );
};

const WorkWithMeSection = () => {
  const spacing = 120;
  return <SectionWrapper theme='light' spacing={spacing}>
    <H2 style={{marginBottom: 40}}>Let's connect!</H2>
    <Socials/>
  </SectionWrapper>
}

const SectionWrapper: React.FC<{
  children?: ReactNode;
  theme: Theme;
  spacing: number;
}> = (props) => {
  return (
    <FlexColumn
      style={{
        alignItems: "center",
        paddingTop: props.spacing,
        paddingBottom: props.spacing,
        backgroundColor: props.theme === 'light' ? 'white' : '#303045',
        color: props.theme === 'light' ? '#303045' : 'white'
      }}
    >
      {props.children}
    </FlexColumn>
  );
};
