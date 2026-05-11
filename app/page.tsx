import Link from "next/link";
import TypewriterEffect from "@/components/TypewriterEffect";
import CountUp from "@/components/CountUp";

export default function Home() {
  return (
    <main>
      <section className="hero fade-in">
        <div className="hero-content">
          <div className="hero-text">
            <h1>Tirath Bhathawala</h1>
            <p className="subtitle">
              I&apos;m <TypewriterEffect />
            </p>
            <p className="hero-description">
              Incoming MSCS at NYU Courant | Specializing in Multimodal AI &
              Agentic Systems.
              <br />
              <span
                style={{
                  color: "var(--highlight)",
                  fontWeight: 500,
                  display: "inline-block",
                  marginTop: "10px",
                }}
              >
                Actively seeking Summer 2027 AI/MLE Internships.
              </span>
            </p>
            <div className="hero-buttons">
              <Link href="/contact" className="btn btn-primary">
                <i className="uil uil-envelope"></i> Get In Touch
              </Link>
              <a
                href="https://shorturl.at/DugCC"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
              >
                <i className="uil uil-file-download"></i> View Resume
              </a>
            </div>
            <div className="social-links">
              <a
                href="https://www.linkedin.com/in/tirath-bhathawala/"
                className="social-link"
                aria-label="LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="uil uil-linkedin"></i>
              </a>
              <a
                href="https://github.com/Tirath5504"
                className="social-link"
                aria-label="GitHub"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="uil uil-github"></i>
              </a>
              <a
                href="https://scholar.google.com/citations?user=xjNDI7AAAAAJ"
                className="social-link"
                aria-label="Google Scholar"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="ai ai-google-scholar-square"></i>
              </a>
              <Link href="/blogs" className="social-link" aria-label="Blog">
                <i className="uil uil-blogger"></i>
              </Link>
              <a
                href="https://www.instagram.com/04_tirath/"
                className="social-link"
                aria-label="Instagram"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="uil uil-instagram"></i>
              </a>
            </div>
          </div>
          <div className="hero-image">
            <div className="hero-avatar">
              <img src="/img/tirath_profile_img.jpeg" alt="Tirath Bhathawala" />
            </div>
          </div>
        </div>
      </section>

      <section className="section alt-bg fade-in">
        <div className="container">
          <h2 className="section-title">Highlights</h2>
          <p className="section-description">
            Quick stats that capture my journey across competitive exams,
            academics, research, and industry collaborations.
          </p>
          <div className="stats-container">
            <div className="stat-item">
              <CountUp from={0} to={499} className="stat-number" duration={2} />
              <div className="stat-label">
                GATE DS&amp;AI Rank (out of 60,000+)
              </div>
            </div>
            <div className="stat-item">
              <CountUp
                from={0}
                to={9.29}
                className="stat-number"
                duration={2}
              />
              <div className="stat-label">
                CGPA (B.Tech Comp Engg with Honors in Intelligent Computing)
              </div>
            </div>
            <div className="stat-item">
              <CountUp from={0} to={6} className="stat-number" duration={2} />
              <div className="stat-label">
                Research Papers &amp; Whitepapers
              </div>
            </div>
            <div className="stat-item">
              <CountUp from={0} to={5} className="stat-number" duration={2} />
              <div className="stat-label">
                Research &amp; Industry Internships
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
