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
                essential. Working with systems and data sparked my interest in how software supports operations.
                That curiosity led me into the Supra Coders program, a bootcamp course to become a Full Stack Developer.
                The course included an internship where our team supported Cape Canaveral launch operations by optimizing
                data collection and mapping features for a weather application. It was my first real world
                experience in working with Engineers to enhance features via the Software Development Life Cycle.
                <br></br>
                After the program, I gained experience as a Developer in delivering a dashboard application
                focused on the efficient communication of satellite assets and resources. This involved the development, testing, and
                deployment phases of the application within a secured enviornment.

                At the end of my Space Force journey I participated in the Skillbridge program for transitioning service
                members as a Walt Disney fellow.
                I supported cross-functional teams in delivering solutions for a large-scale data migration on an enterprise level.
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
