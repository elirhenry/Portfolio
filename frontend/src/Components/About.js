import styled from "styled-components";

function AboutPage() {
  return (
    <ProjectsWrapper>
      <main className="page__content">
        <section className="left-side">
          {/* optional: image, avatar, etc */}
        </section>

        <section className="right-side">
          {/* ✅ put your existing Projects page content here */}
          <h1>About</h1>
        </section>
      </main>
    </ProjectsWrapper>
  );
}

const ProjectsWrapper = styled.div`
  min-height: 100vh;
  background-color: var(--bg-light);
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
`;

export default AboutPage;
