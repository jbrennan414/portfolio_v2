import './App.css'
import experience from './data/experience'
import projects from './data/projects'
import johnPhoto from './assets/img/John_Brennan.jpg'

function GitHubIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 .5C5.73.5.67 5.57.67 11.84c0 5.01 3.24 9.26 7.74 10.76.57.11.78-.25.78-.55v-2.11c-3.15.68-3.82-1.34-3.82-1.34-.52-1.3-1.26-1.65-1.26-1.65-1.03-.71.08-.7.08-.7 1.14.08 1.74 1.17 1.74 1.17 1.01 1.74 2.65 1.24 3.3.95.1-.74.4-1.24.72-1.52-2.52-.29-5.17-1.26-5.17-5.59 0-1.24.44-2.25 1.16-3.04-.12-.29-.5-1.45.11-3.02 0 0 .95-.3 3.11 1.16a10.8 10.8 0 015.66 0c2.15-1.46 3.1-1.16 3.1-1.16.62 1.57.23 2.73.11 3.02.72.79 1.16 1.8 1.16 3.04 0 4.34-2.66 5.3-5.19 5.58.41.35.77 1.05.77 2.11v3.13c0 .3.21.66.79.55 4.5-1.5 7.73-5.75 7.73-10.76C23.33 5.57 18.27.5 12 .5z" />
    </svg>
  )
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M19 3A2 2 0 0121 5v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h14M8.34 18.34V9.67H5.67v8.67h2.67m-1.34-9.84a1.55 1.55 0 100-3.1 1.55 1.55 0 000 3.1M18.34 18.34v-4.75c0-2.47-1.32-3.62-3.08-3.62a2.66 2.66 0 00-2.42 1.33v-1.14h-2.67v8.18h2.67v-4.57c0-1.05.2-2.07 1.5-2.07s1.33 1.24 1.33 2.14v4.5h2.67z" />
    </svg>
  )
}

function YouTubeIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M23.5 6.2a3 3 0 00-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 00.5 6.2 31 31 0 000 12a31 31 0 00.5 5.8 3 3 0 002.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 002.1-2.1A31 31 0 0024 12a31 31 0 00-.5-5.8M9.6 15.6V8.4L15.8 12l-6.2 3.6z" />
    </svg>
  )
}

function EmailIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M20 4H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2m0 4l-8 5-8-5V6l8 5 8-5v2z" />
    </svg>
  )
}

function ProjectImage({ project }) {
  if (project.kind === 'app-icon') {
    return (
      <div className="pcard-img app-icon-tile">
        <div className="app-icon-frame">
          <img src={project.icon} alt={`${project.title} app icon`} />
        </div>
        <div className="app-icon-glow" />
        {project.tagline && <div className="app-icon-tag left">{project.tagline}</div>}
        {project.meta && <div className="app-icon-tag right">{project.meta}</div>}
      </div>
    )
  }
  if (project.kind === 'currensee') {
    return (
      <div className="pcard-img currensee-tile">
        <img src={project.image} alt="" />
      </div>
    )
  }
  return (
    <div className="pcard-img">
      <img src={project.image} alt="" />
    </div>
  )
}

function App() {
  return (
    <>
      <div className="blob blob-v" />
      <div className="blob blob-c" />
      <div className="blob blob-p" />

      <main className="shell">
        <nav className="nav">
          <div className="brand">
            <span className="brand-dot" />
            jbrennan
          </div>
          <div className="nav-links">
            <a href="#about">about</a>
            <a href="#work">work</a>
            <a href="#projects">projects</a>
            <a href="#contact">contact</a>
          </div>
        </nav>

        <section className="hero">
          <div>
            <div className="badge">
              <span className="pulse" /> Open to new opportunities
            </div>
            <h1 className="name">
              Senior engineer.
              <br />
              <span className="grad">Reliability obsessed.</span>
            </h1>
            <p className="tagline">
              I'm John — a senior software engineer with 8 years shipping production systems across VoIP,
              fintech, and communications. I build at the seams: APIs, observability, and anywhere reliability
              meets product.
            </p>
            <div className="cta-row">
              <a className="btn btn-primary" href="mailto:brennanj414@gmail.com">
                Get in touch →
              </a>
              <a className="btn btn-ghost" href="#projects">
                See projects
              </a>
            </div>
          </div>
          <div className="hero-card">
            <img src={johnPhoto} alt="John Brennan" />
            <div className="hero-card-meta">
              <span>est. Denver</span>
              <span>v4.7</span>
            </div>
            <div className="hero-card-caption">
              Senior Software Engineer
              <br />
              <span>@ Ooma</span>
            </div>
          </div>
        </section>

        <div className="stats" id="about">
          <div className="stat"><div className="n">8</div><div className="l">YEARS SHIPPING</div></div>
          <div className="stat"><div className="n">100k</div><div className="l">VOIP DEVICES SUPPORTED</div></div>
          <div className="stat"><div className="n">99.99%</div><div className="l">PLATFORM UPTIME</div></div>
          <div className="stat"><div className="n">30%</div><div className="l">STORAGE COSTS CUT</div></div>
        </div>

        <section id="work">
          <div className="section-head">
            <div className="kicker">— Work history</div>
            <h2>Where I've shipped.</h2>
          </div>
          <div className="timeline">
            {experience.map((job) => (
              <div className="entry" key={job.company + job.years}>
                <div className="yr">{job.years}</div>
                <div>
                  <h3>
                    {job.title} <span className="at">@ {job.company}</span>
                  </h3>
                  <p>{job.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="projects">
          <div className="section-head">
            <div className="kicker">— Side projects</div>
            <h2>Things I've built for fun.</h2>
          </div>
          <div className="pgrid">
            {projects.map((project) => (
              <a className="pcard" href={project.link} target="_blank" rel="noreferrer" key={project.id}>
                <ProjectImage project={project} />
                <div className="pcard-body">
                  <h4>
                    {project.title} <span className="arr">↗</span>
                  </h4>
                  <p>{project.description}</p>
                </div>
              </a>
            ))}
          </div>
        </section>

        <section id="contact" className="contact">
          <h2>
            Let's build something <span className="grad">worth shipping.</span>
          </h2>
          <p>Available for senior / staff roles and interesting contract work.</p>
          <div className="socials">
            <a href="mailto:brennanj414@gmail.com" aria-label="Email"><EmailIcon /></a>
            <a href="https://github.com/jbrennan414" target="_blank" rel="noreferrer" aria-label="GitHub"><GitHubIcon /></a>
            <a href="https://www.linkedin.com/in/jbrennan414/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><LinkedInIcon /></a>
            <a href="https://www.youtube.com/@jbrennan414" target="_blank" rel="noreferrer" aria-label="YouTube"><YouTubeIcon /></a>
          </div>
        </section>
      </main>
    </>
  )
}

export default App
