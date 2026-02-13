const About = () => (
  <div className="aboutcontainer">
    <img className="historyimg" src="plant3.jpg" alt="Stellarium" />
    <img className="creatorimg" src="creat.jpg" alt="Founder" />
    <article className="history">
      <h1>About Our Company</h1>
      <h2>The Lunar Foundation (1990s)</h2>
      <p>Stellarium began as a private hilltop observatory...</p>
      {/* ... more history from your about.html */}
    </article>
    <article className="creator">
      <h1>About The Founder</h1>
      <p>The visionary behind Stellarium is a former astrophysicist...</p>
    </article>
  </div>
);

export default About;