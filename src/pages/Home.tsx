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
  const headerSpacing = 120;
  const isMobileLayout = useIsMobileLayout();

  return (
    <FlexRow
      style={{
        justifyContent: "center",
        marginTop: headerSpacing,
        marginBottom: headerSpacing,
      }}
    >
      <FlexRow>
        {isMobileLayout ? null : (
          <CircleImage
            src="./profile_square.png"
            alt="A picture of Eric Tu"
            size={180}
          />
        )}

        <FlexColumn style={{ marginLeft: 60, justifyContent: "center" }}>
          <Title style={{ textAlign: "start", marginBottom: 12 }}>
            Hi! I'm Eric 👋
          </Title>
          <H3 style={{ maxWidth: 340, textAlign: "start" }}>
            a Front-End & Full-Stack Engineer based in NYC 🗽
          </H3>
        </FlexColumn>
      </FlexRow>
    </FlexRow>
  );
};
