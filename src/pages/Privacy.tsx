import { Link } from "react-router-dom";
import { H2, H3, P } from "../components/typography";

export function Privacy() {
  return (
    <div
      style={{
        flexDirection: "column",
        alignContent: "center",
        textAlign: "start",
      }}
    >
        <H2>Convo Privacy Policy</H2>
        <P>Last updated: May 2023</P>
      <P>
        At Convo, we understand the importance of privacy and safeguarding
        personal information. This privacy policy statement outlines our
        practices regarding the collection and storage of messages provided by
        users of our language learning app.
      </P>

      <H3>Collection of Messages:</H3>

      <P>
        When using our app, users may provide messages for language learning
        purposes. We collect and store these messages in order to provide a
        personalized learning experience and to track progress. However, we do
        not collect or store any user identifying information such as name,
        email address, or phone number.
      </P>

      <H3>Storage of Messages:</H3>

      <P>
        All messages provided by users are stored on secure servers. We take
        reasonable measures to ensure the security and confidentiality of user
        messages and prevent unauthorized access, use, or disclosure.
      </P>

      <H3>Use of Messages:</H3>

      <P>
        User messages are only used for language learning purposes within the
        Convo app. We do not sell or share user messages with any third parties
        for marketing or other purposes.
      </P>

      <H3>Disclosure of Messages:</H3>

      <P>
        We may disclose user messages if required by law, to protect our rights
        or property, or in the event of a merger or acquisition.
      </P>

      <H3>Changes to Privacy Policy:</H3>

      <P>
        We reserve the right to modify this privacy policy statement at any
        time. Any changes will be posted on our website or within the app.
      </P>

      <H3>Contact Us:</H3>

      <P>
        If you have any questions or concerns regarding our privacy policy,
        please contact us at ilovediscolol@gmail.com
      </P>
    </div>
  );
}
