import { NavLink } from "react-router-dom";
import styled from "styled-components";

/* ---------- Component ---------- */

function Navbar() {
  return (
    <NavbarWrapper>
      <StyledNavLink to="/" end>
        Home
      </StyledNavLink>
      <StyledNavLink to="/projects">
        Projects
      </StyledNavLink>
      <StyledNavLink to="/about">
        About
      </StyledNavLink>
    </NavbarWrapper>
  );
}

/* ---------- Styled Components ---------- */

const NavbarWrapper = styled.nav`
  background-color: var(--bg-dark);
  padding: 1.25rem 3rem;
  display: flex;
  justify-content: center;
  gap: 3rem;

  width: 50vw;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;
  border-start-start-radius: 50px;
  border-end-start-radius: 50px;

  @media (max-width: 900px) {
    width: 100%;
    left: 0;
    right: 0;
    border-radius: 0;
    flex-wrap: wrap;
    gap: 1.5rem;
    padding: 1rem 1.5rem;
  }
`;

const StyledNavLink = styled(NavLink)`
  color: var(--text-primary);
  font-size: 1.75rem;
  font-weight: 600;
  text-decoration: underline;
  text-underline-offset: 4px;

  &.active {
    color: var(--accent);
  }
`;

export default Navbar;
