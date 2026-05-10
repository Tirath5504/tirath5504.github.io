export default function About() {
  return (
    <main>
      <section className="section fade-in">
        <div className="container">
          <h1 className="section-title">About Me</h1>
          <div className="about-content">
            <p className="section-description">
              I am an incoming MSCS student at{" "}
              <strong style={{ color: "var(--highlight)" }}>NYU Courant</strong>{" "}
              (Expected May 2028), currently in the final month of my B.Tech in
              Computer Engineering with Honors in Intelligent Computing at
              DJSCE, Mumbai. My research lies at the intersection of{" "}
              <strong style={{ color: "var(--highlight)" }}>
                Agentic Systems
              </strong>
              ,{" "}
              <strong style={{ color: "var(--highlight)" }}>
                Multimodal AI
              </strong>
              , and{" "}
              <strong style={{ color: "var(--highlight)" }}>
                Explainable AI
              </strong>
              .
            </p>
            <p className="section-description" style={{ marginTop: "1.5rem" }}>
              Driven by a deep interest in core computer science, I love
              building AI systems that turn theoretical concepts into practical,
              deployable tools. Currently, I&apos;m preparing for my
              master&apos;s and actively looking for{" "}
              <strong style={{ color: "var(--highlight)" }}>
                AI/MLE internships for Summer 2027
              </strong>
              . Outside of my coursework, I enjoy guiding juniors at DJS ACM,
              writing ML blogs for beginners, and cheering for FC Barcelona!
            </p>
          </div>

          <div className="skills-container">
            <div className="skill-category fade-in">
              <h3>
                <i className="uil uil-brain"></i> AI/ML Frameworks
              </h3>
              <div className="skill-tags">
                <span className="skill-tag">TensorFlow</span>
                <span className="skill-tag">PyTorch</span>
                <span className="skill-tag">Keras</span>
                <span className="skill-tag">OpenCV</span>
                <span className="skill-tag">NLTK</span>
                <span className="skill-tag">Hugging Face</span>
                <span className="skill-tag">Transformers</span>
                <span className="skill-tag">Azure AI</span>
                <span className="skill-tag">scikit-learn</span>
              </div>
            </div>
            <div className="skill-category fade-in">
              <h3>
                <i className="uil uil-code-branch"></i> Programming
              </h3>
              <div className="skill-tags">
                <span className="skill-tag">Python</span>
                <span className="skill-tag">C/C++</span>
                <span className="skill-tag">Java</span>
                <span className="skill-tag">Rust</span>
                <span className="skill-tag">JavaScript</span>
                <span className="skill-tag">SQL</span>
                <span className="skill-tag">HTML/CSS</span>
              </div>
            </div>
            <div className="skill-category fade-in">
              <h3>
                <i className="uil uil-server"></i> Tools &amp; Technologies
              </h3>
              <div className="skill-tags">
                <span className="skill-tag">Docker</span>
                <span className="skill-tag">Git</span>
                <span className="skill-tag">Linux</span>
                <span className="skill-tag">FastAPI</span>
                <span className="skill-tag">React</span>
                <span className="skill-tag">Streamlit</span>
                <span className="skill-tag">Google Colab</span>
                <span className="skill-tag">Kaggle</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
