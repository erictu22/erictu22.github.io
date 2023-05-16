import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { FlexRow } from "./flex";

export function Socials() {
  return (
    <FlexRow style={{gap: 40}}>
      <FontAwesomeIcon icon={faTwitter} size="2x" color="#303045" cursor='pointer' onClick={() => {
        window.open('https://twitter.com/EricWasNumber2')
      }}/>
      <FontAwesomeIcon icon={faLinkedin} size="2x" color="#303045" cursor='pointer' onClick={() => {
        window.open('https://www.linkedin.com/in/erictu2/')
      }} />
      <FontAwesomeIcon icon={faGithub} size="2x" color="#303045" cursor='pointer' onClick={() => {
        window.open('https://github.com/erictu22')
      }}/>
    </FlexRow>
  );
}
