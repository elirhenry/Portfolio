import styled from "styled-components";

function ProjectsPage() {
  return (
    <ProjectsWrapper>
      <main className="page__content">
        <section className="left-side" />

        <section className="right-side">
          <RightGrid>
            <TitleRow>
              <Title>Projects</Title>
            </TitleRow>

            <PitchRow>
              <Pitch>
                Adjust for Project video links & description
              </Pitch>
            </PitchRow>
          </RightGrid>
        </section>
      </main>
    </ProjectsWrapper>
  );
}

/* ---------- Styled Components ---------- */

const ProjectsWrapper = styled.div`
  min-height: 100vh;
  background-color: var(--bg-light);
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
`;

/* This overrides the internal layout WITHOUT touching Layout.css */
const RightGrid = styled.div`
  height: 100%;
  display: grid;
  grid-template-rows: auto 1fr; /* title row + pitch row */
`;

const TitleRow = styled.div`
  margin-top: -3rem;       /* 👈 adjust this number */
  display: flex;
  justify-content: center;
`;

const Title = styled.h1`
  margin: 0;
  font-size: 2.5rem;
  color: var(--accent); /* 👈 uses index.css variable */
`;

//adjust the paragraph alignment
const PitchRow = styled.div`
  display: flex;
  align-items: center;
  margin-top: -12.5rem;       /* optional */
`;

const Pitch = styled.p`
  font-size: 1rem;
  line-height: 1.5;
  color: white;
  opacity: 0.85;
  max-width: 65ch;
`;

export default ProjectsPage;
