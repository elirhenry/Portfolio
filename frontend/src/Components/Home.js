
import "./Home.css";
import { Link } from "react-router-dom";


function HomePage() {
  return (
    <div className="home">

      {/* NAVBAR */}
      <div className="navbar-bg">
        <Link to="/" className="navbar-link-txt navbar-link-active">Home</Link>
        <Link to="/projects" className="navbar-link-txt">Projects</Link>
        <Link to="/about" className="navbar-link-txt">About</Link>
      </div>

    {/* LEFT SIDE */}
      <main className="home__content">
        <section className="left-side">
          {/* Avatar, icons, and labels go here */}
        </section>

    {/* RIGHT SIDE */}
        <section className="right-side">
          <p className="header-welcome">Welcome, my name is</p>
          <h1 className="header-name">Elizabeth Henry</h1>
          <h2 className="header__role">Software Engineer & Scrum-minded dev</h2>
          <p className="value-statement">
            I build and ship React and API-driven apps, containerized with
            Docker and backed by modern DevSecOps practices—turning ideas into
            usable tools for real teams.
          </p>
        </section>
      </main>
    </div>
  );
}

export default HomePage;
