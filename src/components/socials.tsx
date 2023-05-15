import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { FlexRow } from "./flex";

export function Socials() {
  return (
    <FlexRow style={{gap: 24}}>
      <FontAwesomeIcon icon={faTwitter} size="2x" color="#303045" />
      <FontAwesomeIcon icon={faLinkedin} size="2x" color="#303045" />
      <FontAwesomeIcon icon={faGithub} size="2x" color="#303045" />
    </FlexRow>
  );
}
