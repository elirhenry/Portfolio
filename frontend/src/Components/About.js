import styled from "styled-components";

function AboutPage() {
  return (
    <AboutWrapper>
      <main className="page__content">
        {/* LEFT SIDE */}
        <section className="left-side">
        {/* Visual timeline goes here */}
        </section>

        {/* RIGHT SIDE */}
        <section className="right-side">
          <RightGrid>
            <TitleRow>
              <Title>About</Title>
            </TitleRow>
            <PitchRow>
              <Pitch>
                I began my career as a SATCOM operator, where I developed a strong
                foundation in problem-solving, communication, and supporting
                mission-critical teams. That experience led me to Supra Coders,
                where I transitioned into software development and learned how to
                build real-world applications while working in Agile, team-based
                environments. Along the way, I strengthened not only my technical
                skills, but also my ability to collaborate, mentor, and contribute
                meaningfully to shared goals. Today, I’m focused on continuing to
                grow as a software engineer with a Scrum-minded approach, seeking
                opportunities where I can build impactful products and support
                strong, collaborative teams.
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

/* This overrides the internal layout WITHOUT touching Layout.css */
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

//adjust the paragraph alignment
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
