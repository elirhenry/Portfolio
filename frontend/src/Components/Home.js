import styled from "styled-components";
import IconArc from "./IconArc";

function HomePage() {
  return (
    <HomeWrapper>
      {/* LEFT SIDE */}
      <main className="page__content">
        <section className="left-side">
          <AvatarContainer>
            {/* <IconArc offsetTop={-50} arcDegrees={200} avatarWidth={275} avatarHeight={290} avatarOffsetY={38} /> */}
            <IconArc
              offsetTop={0}
              arcDegrees={200}
              avatarWidth={260}
              avatarHeight={275}
              avatarOffsetY={38}
              iconSize={22}
              labelSize="0.5rem"
            />
          </AvatarContainer>
        </section>
        {/* RIGHT SIDE */}
        <section className="right-side">
          <Welcome>Welcome, my name is</Welcome>
          <Name>Elizabeth Henry</Name>
          <Role>Software Professional
            <br />
            Design · Develop · Deploy
          </Role>
          <ValueStatement>
            I build web applications shaped by real-world experience to deliver software tools for modern teams.
            I enjoy transforming problem solving concepts into dependable solutions that make people’s work clearer and more effective.
          </ValueStatement>
        </section>
      </main>
    </HomeWrapper>
  );
}

/* ---------- Styled Components ---------- */

// const HomeWrapper = styled.div`
//   min-height: 100vh;
//   background-color: var(--bg-light);
//   font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
// `;

const HomeWrapper = styled.div`
  min-height: 100svh; /* better on mobile */
  background-color: var(--bg-light);
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
`;

// LEFT SIDE
const AvatarContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  overflow: visible;
`;

// RIGHT SIDE
const Welcome = styled.p`
  font-size: 1.1rem;
  color: var(--accent);
  margin-bottom: 0.75rem;
`;

const Name = styled.h1`
  font-size: 2.7rem;
  margin: 0;
  color: white;
`;

const Role = styled.h2`
  font-size: 1.6rem;
  color: var(--accent);
  margin: 0.5rem 0 1.5rem;
`;

const ValueStatement = styled.p`
  font-size: 1rem;
  line-height: 1.5;
  color: white;
`;

export default HomePage;
