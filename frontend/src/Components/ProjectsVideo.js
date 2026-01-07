import { useState } from "react";
import styled from "styled-components";

function ProjectsVideo() {
  // Replace these with your real video URLs (YouTube embed links, Loom embed links, etc.)
  const projects = [
    {
      id: "lightsaber",
      name: "Lightsaber Database",
      description: "Inventory + CRUD app for managing product catalog data.",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    },
    {
      id: "satellite",
      name: "Satellite Assessment",
      description: "Tracker for satellite/operator assessments and workflow.",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    },
    {
      id: "daily-node",
      name: "Daily/Digital Node",
      description: "Recipe and content app with a clean front-end experience.",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    },
    {
      id: "rocket",
      name: "Rocket Roaming Travel",
      description: "Fictional travel site concept with interactive UI.",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    },
  ];

  const [selected, setSelected] = useState(projects[0]);

  return (
    <ProjectsWrapper>
      <main className="page__content">
        {/* LEFT SIDE: video/demo panel */}
        <section className="left-side">
          <LeftInner>
            <LeftHeading>Select a project to view demo</LeftHeading>
            <VideoFrame
              title={`${selected.name} demo`}
              src={selected.videoUrl}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </LeftInner>
        </section>

        {/* RIGHT SIDE: Project titles/buttons and descriptions */}
        <section className="right-side">
          <RightGrid>
            <TitleRow>
              <Title>Projects</Title>
            </TitleRow>

            <ProjectsRow>
              <ProjectsList>
                {projects.map((p) => {
                  const isActive = selected.id === p.id;
                  return (
                    <ProjectButton
                      key={p.id}
                      type="button"
                      $active={isActive}
                      onClick={() => setSelected(p)}
                    >
                      <ProjectName>{p.name}</ProjectName>
                      <ProjectDesc>{p.description}</ProjectDesc>
                    </ProjectButton>
                  );
                })}
              </ProjectsList>
            </ProjectsRow>
          </RightGrid>
        </section>
      </main>
    </ProjectsWrapper>
  );
}

/* ---------- Styled Components (Projects only) ---------- */

const ProjectsWrapper = styled.div`
  min-height: 100vh;
  background-color: var(--bg-light);
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
`;

/* Left side */
const LeftInner = styled.div`
  width: 100%;
  height: 100%;
  padding: 6.5rem 3rem 3rem; /* space under navbar */
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const LeftHeading = styled.h2`
  margin: 0;
  font-size: 2rem;
  color: #0a192f;
  text-align: center;
  font-weight: 700;
`;

const VideoFrame = styled.iframe`
  width: 100%;
  max-width: 720px;
  height: 405px;
  border: 0;
  border-radius: 16px;
  align-self: center;
`;

/* Right side */
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

const ProjectsRow = styled.div`
  font-size: 1.1rem;
  color: white;
  margin-top: 0.75rem;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
`;

const ProjectsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
`;

/* Button cards */
const ProjectButton = styled.button`
  text-align: left;
  background: transparent;
  border: none;
  padding: 0;
  cursor: pointer;

  &:focus {
    outline: none;
  }
`;

const ProjectName = styled.div`
  display: inline-block;
  font-size: 1.35rem;
  font-weight: 700;
  color: var(--accent);
  text-decoration: underline;
  text-underline-offset: 6px;
  margin-bottom: 0.35rem;
`;

const ProjectDesc = styled.div`
  font-size: 1rem;
  line-height: 1.5;
  color: white;
  opacity: 0.85;
  max-width: 65ch;
`;

export default ProjectsVideo;
