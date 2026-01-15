import styled from "styled-components";
import IconArc from "./IconArc";

/* ---------- Component ---------- */

function HomePage() {
  return (
    <HomeWrapper>
      <main className="page__content">
        {/* LEFT SIDE */}
        <section className="left-side">
          <AvatarContainer>
            <IconArc
              offsetTop={-50}    // move arc lower
              radius={195}       // spread wider
              arcDegrees={200}   // more spacing across a wider arc
            />
          </AvatarContainer>
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

const AvatarContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  overflow: visible;
`;

const Welcome = styled.p`
  font-size: 1.1rem;
  color: var(--accent);
  margin-bottom: 0.75rem;
`;

const Name = styled.h1`
  font-size: 2.7rem;
  margin: 0;
  color:white;
`;

const Role = styled.h2`
  font-size: 1.6rem;
  color: var(--accent);
  margin-top: 0.5rem;
  margin-bottom: 1.5rem;
`;

const ValueStatement = styled.p`
  font-size: 1rem;
  line-height: 1.5;
  color: white;
`;

export default HomePage;
