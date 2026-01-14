import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { projects } from "../Media/projectsData";

function ProjectsPage() {
  const [selected, setSelected] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  // Reset overlay + force video to restart whenever a new project is selected
  useEffect(() => {
    setIsPlaying(false);

    const v = videoRef.current;
    if (!v) return;

    v.pause();
    v.currentTime = 0;
    v.load();
  }, [selected?.id]);

  const handlePlayFromOverlay = async () => {
    const v = videoRef.current;
    if (!v) return;

    try {
      await v.play();
      // onPlay will set isPlaying(true)
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <ProjectsWrapper>
      <main className="page__content">
        {/* LEFT SIDE */}
        <section className="left-side">
          <LeftInner>
            <LeftHeading>
              {selected ? selected.name : "Select a project to view demo video"}
            </LeftHeading>

            {selected && (
              <VideoShell>
                <Video
                  key={selected.id} // forces a fresh <video> when switching projects
                  ref={videoRef}
                  src={selected.videoUrl}
                  controls
                  preload="metadata"
                  onPlay={() => setIsPlaying(true)}
                  onPause={() => setIsPlaying(false)}
                  onEnded={() => setIsPlaying(false)}
                />

                {/* Only show overlay + click-catcher when NOT playing */}
                {!isPlaying && (
                  <>
                    <ClickCatcher type="button" onClick={handlePlayFromOverlay} />
                    <PlayOverlay>▶</PlayOverlay>
                  </>
                )}
              </VideoShell>
            )}
          </LeftInner>
        </section>

        {/* RIGHT SIDE */}
        <section className="right-side">
          <RightGrid>
            <TitleRow>
              <Title>Projects</Title>
            </TitleRow>

            <ProjectsRow>
              <ProjectsList>
                {projects.map((p) => {
                  const isActive = selected?.id === p.id;

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
  padding: 6.5rem 3rem 3rem;
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

const VideoShell = styled.div`
  position: relative;
  width: 100%;
  max-width: 720px;
  align-self: center;
`;

const Video = styled.video`
  width: 100%;
  border-radius: 16px;
  display: block;
`;

/* Transparent button that captures click anywhere on video (only when paused) */
const ClickCatcher = styled.button`
  position: absolute;
  inset: 0;
  border: none;
  background: transparent;
  cursor: pointer;
  z-index: 2;
`;

/* Semi-transparent overlay play icon */
const PlayOverlay = styled.div`
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 5rem;
  color: rgba(100, 255, 218, 0.85);
  background: rgba(0, 0, 0, 0.25);
  border-radius: 16px;
  pointer-events: none;
  z-index: 3;
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

export default ProjectsPage;
