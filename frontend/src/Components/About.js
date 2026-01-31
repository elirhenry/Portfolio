import styled from "styled-components";
import AboutTimeline from "./AboutTimeline"

function AboutPage() {
  return (
    <AboutWrapper>
      <main className="page__content">
        {/* LEFT SIDE */}
        <section className="left-side">
          <LeftContained>
            <AboutTimeline accent="#64ffda" text="#0a192f" topOffset={120} />
          </LeftContained>
        </section>

        {/* RIGHT SIDE */}
        <section className="right-side">
          <RightGrid>
            <TitleRow>
              <Title>About</Title>
            </TitleRow>
            <PitchRow>
              <Pitch>
                My journey in tech began in the Space Force as a Satellite Operator where reliability and precision were
                essential. Working with systems and data analysis sparked my interest in how software supports operations.
                That curiosity led me into the Supra Coders program where I was trained as a Full Stack Developer.
                That training was followed by an internship to support Cape Canaveral missions by improving a
                real-time weather application used for launch operations.
                I gained experience as a Software Developer through supporting the design, development, and deployment
                of a dashboard application focused on systems' status, communication, and alerts.
                These experiences progressed into a Agile delivery and Scrum leadership,
                where I supported cross-functional teams during large-scale data migration initiatives.
              </Pitch>
            </PitchRow>
          </RightGrid>
        </section>
      </main>
    </AboutWrapper>
  );
}

/* ---------- Styled Components ---------- */

const AboutWrapper = styled.div`
  min-height: 100vh;
  background-color: var(--bg-light);
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
`;

const LeftContained = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  overflow: hidden; /* ✅ keeps it in the left column */
`;

const RightGrid = styled.div`
  height: 100%;
  display: grid;
  grid-template-rows: auto 1fr;
`;

const TitleRow = styled.div`
  margin-top: -3rem;
  display: flex;
  justify-content: center;
`;

const Title = styled.h1`
  margin: 0;
  font-size: 2.5rem;
  color: var(--accent);
`;

const PitchRow = styled.div`
  font-size: 1.1rem;
  color: white;
  margin-bottom: 0.75rem;
`;

const Pitch = styled.p`
  font-size: 1rem;
  line-height: 1.5;
  color: white;
  opacity: 0.85;
  max-width: 65ch;
`;

export default AboutPage;
