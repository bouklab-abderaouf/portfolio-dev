import React, { useEffect, useRef, useState } from "react";
import { projects, profile, experiments, experience } from "./data/portfolio";
import jewelryVideo from "./assets/SDXL.mp4";
import cryptoVideo from "./assets/cryptovid.mp4";
import "./App.css";
import ContactForm from "./components/ContactForm";

function Arrow({ direction = "up", ...props }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      aria-hidden="true"
      {...props}
    >
      <path
        d={
          direction === "down"
            ? "M12 3v18M4 13l8 8 8-8"
            : "M5 19 19 5M5 5h14v14"
        }
      />
    </svg>
  );
}
function Asterisk({ className = "" }) {
  return (
    <svg
      className={className}
      viewBox="0 0 100 100"
      aria-hidden="true"
      fill="none"
      stroke="currentColor"
      strokeWidth="14"
    >
      {[0, 45, 90, 135].map((angle) => (
        <path key={angle} d="M50 4v92" transform={`rotate(${angle} 50 50)`} />
      ))}
    </svg>
  );
}
function Tags({ items }) {
  return (
    <ul className="tags" aria-label="Technologies">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}
function StudyButton({ project, onOpen, children = "Read the case study" }) {
  return (
    <button
      className="line-link"
      onClick={() => onOpen(project)}
      aria-label={`Read ${project.shortTitle} case study`}
    >
      {children}
      <Arrow />
    </button>
  );
}
function Diagram({ project, theme = "" }) {
  return (
    <div className={`system-diagram ${theme}`}>
      <div className="diagram-caption">
        <span className="mono">SYSTEM MAP / {project.number}</span>
        <span>Simplified architecture</span>
      </div>
      <ol className="diagram-steps">
        {project.steps.map((step, index) => (
          <li key={step.title} style={{ "--step": index }}>
            <span className="node-index">0{index + 1}</span>
            <span className="node-title">{step.title}</span>
            <span className="node-text">{step.text}</span>
            {index < project.steps.length - 1 && (
              <span className="node-arrow" aria-hidden="true">
                →
              </span>
            )}
          </li>
        ))}
      </ol>
      <p className="diagram-note">
        {project.id === "jewelry"
          ? "The interface and the model work on different timescales. The integration connects them."
          : project.id === "search"
            ? "A search layer over business data. A natural-language interaction for the team."
            : "The pipeline produces a draft. A person makes the publishing decision."}
      </p>
    </div>
  );
}
function FeaturedStage({ onOpen }) {
  const [view, setView] = useState("product");
  const videoRef = useRef(null);
  const project = projects.jewelry;
  useEffect(() => {
    const video = videoRef.current;
    if (view === "product") {
      video.play().catch(() => {
        // Autoplay can be restricted by the browser's playback policy.
      });
    } else {
      video.pause();
    }
  }, [view]);
  function switchView(next) {
    setView(next);
  }
  return (
    <section className="exhibit" id="work">
      <div className="wrap">
        <div className="section-kicker">
          <span>01 / SELECTED WORK</span>
          <span>LOOK CLOSER ↓</span>
        </div>
        <div className="exhibit-heading">
          <h2>
            Good on the surface.
            <br />
            <em>Better underneath.</em>
          </h2>
          <p>
            Every product has two stories.
            <br />
            Here’s the experience—and the
            <br className="desktop" /> engineering that makes it possible.
          </p>
        </div>
        <div className="stage-toolbar">
          <div className="stage-name">
            <span className="project-number">01</span>
            <span>
              {project.shortTitle}
              <small>CLEED.IA / GENERATIVE AI</small>
            </span>
          </div>
          <div
            className="view-switch"
            role="group"
            aria-label="Jewelry project view"
          >
            <button
              aria-pressed={view === "product"}
              onClick={() => switchView("product")}
            >
              <span aria-hidden="true">◉</span> In use
            </button>
            <button
              aria-pressed={view === "system"}
              onClick={() => switchView("system")}
            >
              <span aria-hidden="true">⌘</span> Under the hood
            </button>
          </div>
        </div>
        <div className="stage-body">
          <div className="product-view" hidden={view !== "product"}>
            <div className="demo-frame">
              <div className="demo-label mono">
                <span className="live-dot" /> ORIGINAL PRODUCT RECORDING{" "}
                <span>00:22</span>
              </div>
              <div className="film-player">
                <video
                  ref={videoRef}
                  src={jewelryVideo}
                  poster="/assets/jewelry-poster.jpg"
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="auto"
                  aria-label="AI jewelry generation recorded demo"
                />
              </div>
            </div>
            <aside className="demo-aside">
              <Asterisk />
              <p>
                From a<br />
                preference
                <br />
                to a <em>possibility.</em>
              </p>
              <span className="mono">
                MATERIAL + COLOR + STYLE
                <br />↓<br />
                GENERATED CONCEPTS
              </span>
            </aside>
          </div>
          {view === "system" && (
            <div className="system-view">
              <Diagram project={project} />
              <div className="system-note">
                <span className="mono">THE ENGINEERING DETAIL</span>
                <p>
                  Manage the asynchronous calls and the data moving between a
                  user’s choices and the model’s response.
                </p>
              </div>
            </div>
          )}
        </div>
        <div className="stage-bottom">
          <div>
            <p>{project.description}</p>
            <p className="role">
              <span>MY ROLE</span> {project.role}
            </p>
          </div>
          <StudyButton project={project} onOpen={onOpen} />
        </div>
        <Tags items={project.stack} />
      </div>
    </section>
  );
}
function CaseStudy({ project, onClose }) {
  const dialogRef = useRef(null);
  useEffect(() => {
    if (!project) return;
    const dialog = dialogRef.current;
    const previousFocus = document.activeElement;
    const previousOverflow = document.body.style.overflow;
    dialog.showModal();
    document.body.style.overflow = "hidden";
    return () => {
      dialog.close();
      document.body.style.overflow = previousOverflow;
      previousFocus?.focus();
    };
  }, [project]);
  return (
    <dialog
      ref={dialogRef}
      className="case-dialog"
      aria-labelledby="case-title"
      onCancel={(e) => {
        e.preventDefault();
        onClose();
      }}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      {project && (
        <div className="case-sheet">
          <header>
            <span className="mono">FIELD NOTES / {project.number}</span>
            <button
              onClick={onClose}
              className="close-button"
              aria-label="Close case study"
            >
              Close <span>×</span>
            </button>
          </header>
          <span className="mono case-category">{project.category}</span>
          <h2 id="case-title">
            {project.shortTitle}
            <span>.</span>
          </h2>
          <p className="case-intro">{project.description}</p>
          <Tags items={project.stack} />
          <div className="case-sections">
            {project.study.map(([title, body], i) => (
              <section key={title}>
                <span className="mono">0{i + 1}</span>
                <div>
                  <h3>{title}</h3>
                  <p>{body}</p>
                </div>
              </section>
            ))}
          </div>
          {project.dossier && (
            <a
              href={project.dossier}
              className="solid-link"
              target="_blank"
              rel="noreferrer"
            >
              Open architecture dossier <Arrow />
            </a>
          )}
        </div>
      )}
    </dialog>
  );
}
export default function App() {
  const [study, setStudy] = useState(null);
  const [archive, setArchive] = useState(false);
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <header className="site-header wrap">
        <a
          className="identity"
          href="#main"
          aria-label="Abderaouf Bouklab home"
        >
          <span className="monogram">
            ab<span>↗</span>
          </span>
          <span>
            ABDERAOUF
            <br />
            BOUKLAB
          </span>
        </a>
        <nav aria-label="Main navigation">
          <a href="#work">
            Work <sup>03</sup>
          </a>
          <a href="#about">About</a>
          <a href="#workbench">Workbench</a>
        </nav>
        <a href="#contact-form" className="header-contact">
          Let’s talk <Arrow />
        </a>
      </header>
      <main id="main">
        <section className="hero wrap" aria-labelledby="hero-title">
          <div className="hero-top mono">
            <span>
              <span className="live-dot" /> FULL-STACK & APPLIED AI
            </span>
            <span>BASED IN PARIS, FR</span>
          </div>
          <div className="hero-title-wrap">
            <span className="hero-prelude mono">FROM INPUT TO IMPACT</span>
            <h1 id="hero-title">
              Complex systems.
              <br />
              <em>Useful products.</em>
            </h1>
            <figure className="portrait">
              <div className="portrait-image">
                <img
                  src="/assets/portrait.png"
                  alt="Abderaouf Bouklab"
                  loading="eager"
                />
                <span className="photo-cross">+</span>
              </div>
              <figcaption>
                AB / PARIS. <span>↗</span>
              </figcaption>
            </figure>
            <svg className="hand-line" viewBox="0 0 150 100" aria-hidden="true">
              <path d="M8 80C32 6 100 0 123 32c16 23-14 35-27 25M119 19l5 16 16-8" />
            </svg>
          </div>
          <div className="hero-bottom">
            <a className="explore-link" href="#work">
              <span className="round-arrow">
                <Arrow direction="down" />
              </span>
              EXPLORE SELECTED WORK
            </a>
            <div>
              <p>
                I’m Abderaouf, a full-stack engineer building
                <br className="desktop" /> web, mobile, and AI-powered
                experiences.
              </p>
              <a className="line-link resume" href="/Cv.pdf" download>
                Download my résumé <Arrow />
              </a>
            </div>
          </div>
          <div
            className="idea-path"
            aria-label="An idea, an interface, intelligence, a working product"
          >
            {[
              "An idea",
              "An interface",
              "Intelligence",
              "A working product",
            ].map((item, i) => (
              <React.Fragment key={item}>
                <span style={{ "--step": i }}>
                  <small>0{i + 1}</small>
                  {item}
                  {i === 3 && <span className="path-dot" />}
                </span>
                {i < 3 && <i aria-hidden="true" />}
              </React.Fragment>
            ))}
          </div>
        </section>
        <FeaturedStage onOpen={setStudy} />
        <section className="search-project wrap" aria-labelledby="search-title">
          <div className="search-story">
            <span className="project-index">
              02<span> / APPLIED AI</span>
            </span>
            <h2 id="search-title">
              Less searching.
              <br />
              <em>More understanding.</em>
            </h2>
            <p>{projects.search.description}</p>
            <p className="role">
              <span>MY ROLE</span> {projects.search.role}
            </p>
            <Tags items={projects.search.stack} />
            <StudyButton project={projects.search} onOpen={setStudy} />
          </div>
          <div className="search-blueprint">
            <div className="blueprint-top mono">
              <span>POPPINLIVE / INTERNAL SEARCH</span>
              <span>↗</span>
            </div>
            <div className="orbit-map">
              <div className="orbit-circle one" />
              <div className="orbit-circle two" />
              <div className="orbit-axis" />
              <div className="orbit-node top">
                <small>01 / SOURCE</small>Business data
              </div>
              <div className="orbit-node middle">
                <Asterisk />
                <span>
                  Azure AI Search<small>+ Azure OpenAI</small>
                </span>
              </div>
              <div className="orbit-node bottom">
                <small>02 / INTERACTION</small>Natural-language questions
              </div>
            </div>
            <p>
              From operational information
              <br />
              to a conversation with your data.
            </p>
            <div className="blueprint-bottom mono">
              SIMPLIFIED ARCHITECTURE<span>ILLUSTRATION, NOT A LIVE UI</span>
            </div>
          </div>
        </section>
        <section
          className="automation-section wrap"
          aria-labelledby="automation-title"
        >
          <div className="automation-top">
            <span className="project-index">
              03<span> / CONNECTED SYSTEMS</span>
            </span>
            <img src="/assets/n8n.png" alt="n8n" loading="lazy" />
          </div>
          <div className="automation-heading">
            <h2 id="automation-title">
              Let the workflow
              <br />
              <em>do the legwork.</em>
            </h2>
            <div>
              <p>
                Research. Generate. Deliver. Record.
                <br />
                Three production pipelines that connect the steps—and account
                for what happens between them.
              </p>
              <StudyButton project={projects.automation} onOpen={setStudy} />
            </div>
          </div>
          <div className="pipeline">
            <div className="pipeline-label mono">
              INSIDE THE SEO CONTENT ENGINE <span>↓</span>
            </div>
            <Diagram project={projects.automation} theme="light-diagram" />
            <div className="pipeline-controls">
              <span>↻ Retry logic</span>
              <span>◎ Cost tracking</span>
              <span>✓ Human review</span>
            </div>
          </div>
          <div className="automation-bottom">
            <span>ALSO DOCUMENTED</span>
            <p>
              Instagram acquisition + CRM sync
              <br />
              Personalized avatar video
            </p>
            <a
              href="/production-ai-architecture.pdf"
              target="_blank"
              rel="noreferrer"
              className="line-link"
            >
              The full architecture dossier <Arrow />
            </a>
          </div>
        </section>
        <section className="track-record">
          <div className="wrap">
            <div className="record-intro">
              <span className="mono">BEYOND THE AI LAYER</span>
              <h2>
                Built it.
                <br />
                <em>Shipped it.</em>
              </h2>
              <p>
                At Poppinlive, my work spanned the B2B portal, mobile apps,
                Shopify integrations, and internal AI tools.
              </p>
            </div>
            <div className="record-stats">
              <div>
                <span className="stat-label mono">APP LOADING TIME</span>
                <strong>
                  <span>30s</span>
                  <i>→</i>3s
                </strong>
                <p>Loading time reduced on the Poppinlive app.</p>
              </div>
              <div>
                <span className="stat-label mono">
                  REAL PEOPLE, REAL PRODUCT
                </span>
                <strong>
                  1,000<span className="plus">+</span>
                </strong>
                <p>Active users on the Poppinlive app.</p>
              </div>
              <div className="shipping-line">
                <span>Web → iOS → Android</span>
                <p>From development to store releases.</p>
              </div>
              <small>
                Figures reported in my résumé. Application-wide results, not
                AI-search benchmarks.
              </small>
            </div>
          </div>
        </section>
        <section className="workbench wrap" id="workbench">
          <div className="bench-heading">
            <div>
              <span className="mono">02 / ON THE WORKBENCH</span>
              <h2>
                Work in <em>progress.</em>
              </h2>
            </div>
            <span className="hand-note">Curiosity doesn’t clock out. ↘</span>
          </div>
          <div className="bench-grid">
            {experiments.map((exp) => (
              <article className="notebook" key={exp.id}>
                <div className="notebook-top">
                  <span className="mono">EXPERIMENT / 001</span>
                  <span className="work-status">
                    <span className="live-dot" />
                    {exp.status}
                  </span>
                </div>
                <div className="notebook-title">
                  <h3>{exp.name}</h3>
                  <img src="/assets/gemini.png" alt="Gemini" loading="lazy" />
                </div>
                <p>{exp.description}</p>
                <Tags items={exp.stack} />
                <div className="notebook-note">
                  <span className="mono">CURRENT NOTE</span>
                  <p>{exp.note}</p>
                </div>
              </article>
            ))}
            <article className="archive">
              <span className="mono">FROM THE ARCHIVE / FULL-STACK</span>
              <h3>
                Before the models,
                <br />
                there were <em>APIs.</em>
              </h3>
              <p>
                A React cryptocurrency interface with live data and a news API.
                An earlier piece of my full-stack journey.
              </p>
              <button
                className="line-link"
                aria-expanded={archive}
                aria-controls="crypto-demo"
                onClick={() => setArchive(!archive)}
              >
                {archive ? "Close the recording" : "Watch the original demo"}
                <span aria-hidden="true">{archive ? "−" : "↗"}</span>
              </button>
            </article>
          </div>
          {archive && (
            <div className="archive-player" id="crypto-demo">
              <video
                src={cryptoVideo}
                poster="/assets/crypto-poster.jpg"
                controls
                playsInline
                preload="metadata"
                aria-label="Cryptocurrency visualizer recorded demo"
              />
            </div>
          )}
        </section>
        <section className="about wrap" id="about">
          <div className="about-label">
            <span className="mono">03 / THE PERSON</span>
            <Asterisk />
          </div>
          <div className="about-main">
            <h2>
              I like seeing
              <br />
              <em>the whole picture.</em>
            </h2>
            <div className="about-columns">
              <p>
                A useful product asks more of you than a good interface. I like
                following the thread: from what someone needs, through the code
                and data, all the way to how it runs.
              </p>
              <p>
                That’s taken me across web, mobile, and production systems. Now
                I’m bringing that experience to applied AI—and looking for a
                team building something worth using.
              </p>
            </div>
            <div className="experience">
              {experience.map((job) => (
                <div key={job.company}>
                  <strong>{job.company}</strong>
                  <span>{job.role}</span>
                  <small>{job.date}</small>
                </div>
              ))}
            </div>
            <div className="skills mono">
              TYPESCRIPT / REACT / NEXT.JS / NESTJS / POSTGRESQL / REACT NATIVE
              / DOCKER
            </div>
          </div>
        </section>
        <section className="contact" id="contact">
          <div className="wrap">
            <div className="contact-top mono">
              <span>THE NEXT GOOD THING STARTS WITH A CONVERSATION.</span>
              <span>PARIS ↗ ANYWHERE</span>
            </div>
            <h2 className="contact-big">
              Let’s build
              <br />
              <em>something useful.</em>
              <Arrow />
            </h2>
            <div className="contact-compose">
              <div className="contact-intro">
                <h3>
                  A project. A role.
                  <br />A good conversation.
                </h3>
                <p>
                  Open to conversations about full-stack and applied AI
                  engineering opportunities. Leave a message here and I’ll get
                  back to you by email.
                </p>
              </div>
              <ContactForm />
            </div>
          </div>
        </section>
      </main>
      <footer className="site-footer wrap">
        <a className="monogram" href="#main" aria-label="Back to top">
          ab<span>↗</span>
        </a>
        <span>© {new Date().getFullYear()} ABDERAOUF BOUKLAB</span>
        <div>
          <a href={profile.github} target="_blank" rel="noreferrer">
            GitHub <Arrow />
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer">
            LinkedIn <Arrow />
          </a>
          <a href="/Cv.pdf" download>
            Résumé <Arrow />
          </a>
        </div>
      </footer>
      <CaseStudy project={study} onClose={() => setStudy(null)} />
    </>
  );
}
