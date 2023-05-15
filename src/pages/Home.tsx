import CircleImage from "../components/circleImage";
import { FlexRow } from "../components/flex";
import logo from "../logo.svg";

export function Home() {
  return (
    <div className="App">
      <FlexRow style={{ justifyContent: "center" }}>
        <CircleImage
          src="./profile_square.png"
          alt="A picture of Eric Tu"
          size={42}
        />
      </FlexRow>
    </div>
  );
}
