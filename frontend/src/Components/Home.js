import styled from "styled-components";

/* ---------- Component ---------- */

function HomePage() {
  return (
    <HomeWrapper>
      <main className="page__content">
        {/* LEFT SIDE */}
        <section className="left-side">
          {/* Avatar, icons, and labels go here */}
        </section>

        {/* RIGHT SIDE */}
        <section className="right-side">
          <Welcome>Welcome, my name is</Welcome>
          <Name>Elizabeth Henry</Name>
          <Role>Software Engineer & Scrum-minded dev</Role>
          <ValueStatement>
            I build and ship React and API-driven apps, containerized with Docker
            and backed by modern DevSecOps practices—turning ideas into usable
            tools for real teams.
          </ValueStatement>
        </section>
      </main>
    </HomeWrapper>
  );
}

/* ---------- Styled Components ---------- */

const HomeWrapper = styled.div`
  min-height: 100vh;
  background-color: var(--bg-light);
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
`;

const Welcome = styled.p`
  font-size: 1.1rem;
  color: var(--accent);
  margin-bottom: 0.75rem;
`;

const Name = styled.h1`
  font-size: 2.7rem;
  margin: 0;
`;

const Role = styled.h2`
  font-size: 1.6rem;
  color: var(--accent);
  margin-top: 0.5rem;
  margin-bottom: 1.5rem;
`;

const ValueStatement = styled.p`
  font-size: 1.05rem;
  line-height: 1.6;
  color: var(--text-muted);
`;

export default HomePage;
