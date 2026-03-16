import styled from "styled-components";
import AboutTimeline from "./AboutTimeline"

function AboutPage() {
  const isMobile = window.innerWidth <= 900;
  return (
    <AboutWrapper>
      <main className="page__content">

        {/* LEFT SIDE */}
        <section className="left-side">
          <LeftContained>
            <AboutTimeline
              accent="#64ffda"
              text="#0a192f"
              topOffset={isMobile ? 20 : 120}
            />
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
                My background in tech is rooted in operational environments, where reliability and precision were daily requirements.
                Working with systems and data shaped how I think about problem-solving and sparked my interest in how software supports operations.
                <br></br>
                As I transitioned into building software, I gravitated toward projects that improved visibility and coordination for teams.
                Collaborating in Agile environments to manage workflows reinforced my appreciation for thoughtful design and development across engineering teams.
                <br></br>
                Today, I continue to build and learn while seeking opportunities to contribute to dependable, well-designed software.
                I enjoy connecting with teams that value collaboration, clarity, and real-world impact.
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
  overflow: hidden;
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
