import CircleImage from "../components/circleImage";
import { FlexColumn, FlexRow } from "../components/flex";
import { H2, H3, P, Title } from "../components/typography";
import { useIsMobileLayout } from "../hooks/useIsMobileLayout";

export function Home() {
  return (
    <div className="App">
      <HeaderSection />
    </div>
  );
}

const HeaderSection = () => {
  const headerSpacing = 60;
  const isMobileLayout = useIsMobileLayout();

  return (
    <FlexColumn
      style={{
        alignItems: "center",
        paddingTop: headerSpacing,
        paddingBottom: headerSpacing,
        backgroundColor: 'black',
        color: 'white'
      }}
    >
      <FlexRow>
        {isMobileLayout ? null : (
          <CircleImage
            src="./profile_square.png"
            alt="A picture of Eric Tu"
            size={160}
          />
        )}

        <FlexColumn style={{ marginLeft: isMobileLayout ? 0 : 60, justifyContent: "center"}}>
          <Title style={{ textAlign: 'start', marginBottom: 24 }}>
            Hi, I'm Eric 👋
          </Title>
          <H3 style={{ maxWidth: isMobileLayout ? 340 : 368, textAlign: "start" }}>
            a Front-End & Full-Stack Engineer based in Brooklyn, NYC 🗽
          </H3>
        </FlexColumn>
      </FlexRow>

      <FlexRow style={{marginTop: headerSpacing, width: isMobileLayout ? 280 : undefined}}>
        <P>This website was built using React.js and CSS styled-components</P>
      </FlexRow>
      
    </FlexColumn>
  );
};
