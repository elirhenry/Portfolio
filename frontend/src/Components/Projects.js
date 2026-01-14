import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { projects } from "../Media/projectsData";

function ProjectsPage() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const videoElementRef = useRef(null);

  // When a new project is selected, starts the new video starts at 0 and shows the play button.
  useEffect(() => {
    if (!selectedProject) return;
    setIsVideoPlaying(false);
    const currentVideoElement = videoElementRef.current;
    if (!currentVideoElement) return;
    currentVideoElement.pause();
    currentVideoElement.currentTime = 0;
  }, [selectedProject]);


  // Plays the selected video when the play button is clicked.
  const playSelectedVideo = async () => {
    const currentVideoElement = videoElementRef.current;
    if (!currentVideoElement) return;
    try {
      await currentVideoElement.play();
    } catch (error) {
      console.log(error);
    }
  };

  // Makes sure the play button appears when a new project is selected, even if the last video was still playing.
  const selectProject = (projectToSelect) => {
    const currentVideoElement = videoElementRef.current;
    setIsVideoPlaying(false);
    if (currentVideoElement) {
      currentVideoElement.pause();
      currentVideoElement.currentTime = 0;
    }
    setSelectedProject(projectToSelect);
  };

  return (
    <ProjectsWrapper>
      <main className="page__content">
        {/* LEFT SIDE */}
        <section className="left-side">
          <LeftInner>
            <LeftHeading>
              {selectedProject
                ? selectedProject.name
                : "Select a project to view demo video"}
            </LeftHeading>

            {selectedProject && (
              // Remount the video area for each project selected
              <VideoShell key={selectedProject.id}>
                <Video
                  ref={videoElementRef}
                  src={selectedProject.videoUrl}
                  controls
                  preload="metadata"
                  onPlay={() => setIsVideoPlaying(true)}
                  onPause={() => setIsVideoPlaying(false)}
                  onEnded={() => setIsVideoPlaying(false)}
                />

                {/* Play button is visible only when the video is not playing. */}
                {!isVideoPlaying && (
                  <div>
                    <ClickCatcher type="button" onClick={playSelectedVideo} />
                    <PlayOverlay>▶</PlayOverlay>
                  </div>
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
                {projects.map((project) => {
                  const isSelected = selectedProject?.id === project.id;

                  return (
                    <ProjectButton
                      key={project.id}
                      type="button"
                      $active={isSelected}
                      onClick={() => selectProject(project)}
                    >
                      <ProjectName>{project.name}</ProjectName>
                      <ProjectDesc>{project.description}</ProjectDesc>
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

/* ---------- Styled Components ---------- */

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

/* Play button */
const ClickCatcher = styled.button`
  position: absolute;
  inset: 0;
  border: none;
  background: transparent;
  cursor: pointer;
  z-index: 2;
`;

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
