import { Link } from "react-router-dom";
import { H2, H3 } from "../components/typography";

export function Convo() {
  return (
    <div
      style={{
        flexDirection: "column",
        alignContent: "center",
        textAlign: "center",
      }}
    >
      <H2>Convo</H2>
      <H3>Your personal AI Language Coach</H3>
      <H3>
        <Link
          style={{ alignSelf: "center" }}
          to={"mailto:ilovediscolol@gmail.com?subject=Convo%20Support"}
        >
          Support Email
        </Link>
      </H3>
    </div>
  );
}
