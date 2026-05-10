export default function About() {
  return (
    <main>
      <section className="section fade-in">
        <div className="container">
          <h1 className="section-title">About Me</h1>
          
          <div style={{ position: "relative", padding: "3rem", background: "var(--glass-bg)", borderRadius: "30px", border: "1px solid var(--highlight)", boxShadow: "0 10px 30px rgba(0, 212, 255, 0.1)", marginBottom: "4rem" }}>
            <p className="section-description" style={{ fontSize: "1.25rem", color: "var(--primary-text)", maxWidth: "100%", textAlign: "left" }}>
              Hi, I’m <strong style={{ color: "var(--highlight)" }}>Tirath</strong> — a final-year Computer Engineering student from Mumbai focused on AI systems, machine learning research, and building practical tools around LLMs and multimodal AI.
            </p>
            <p className="section-description" style={{ marginTop: "1.5rem", maxWidth: "100%", textAlign: "left" }}>
              Most of my work sits at the intersection of research and engineering: from multilingual hate speech detection and peer-review transparency systems to code transpilation and agentic AI frameworks. I enjoy turning messy, ambiguous research ideas into systems that can actually be deployed, evaluated, and used by people.
            </p>
            <p className="section-description" style={{ marginTop: "1.5rem", maxWidth: "100%", textAlign: "left", marginBottom: 0 }}>
              Outside of academics, I’m someone who genuinely enjoys deep technical rabbit holes, mentoring students, exploring cities through food, and having long conversations about technology, academia, and where AI is headed next.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "3rem", marginTop: "4rem" }}>
            <div>
              <h2 style={{ fontSize: "1.8rem", color: "var(--primary-text)", marginBottom: "2rem", borderBottom: "2px solid var(--highlight)", display: "inline-block", paddingBottom: "0.5rem" }}>
                <i className="uil uil-arrow-growth"></i> Currently Exploring
              </h2>
              <ul style={{ listStyleType: "none", padding: 0, margin: 0 }}>
                {["Mechanistic interpretability and reasoning traces in LLMs", "Multi-agent systems for scientific workflows", "Small language model finetuning", "Retrieval + argumentation-based reasoning systems", "AI systems that improve research peer review and evaluation"].map((item, i) => (
                  <li key={i} style={{ padding: "1rem 1.5rem", background: "var(--secondary-bg)", borderRadius: "15px", marginBottom: "1rem", color: "var(--secondary-text)", borderLeft: "4px solid var(--highlight)" }}>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h2 style={{ fontSize: "1.8rem", color: "var(--primary-text)", marginBottom: "2rem", borderBottom: "2px solid var(--highlight)", display: "inline-block", paddingBottom: "0.5rem" }}>
                <i className="uil uil-clock"></i> Right Now
              </h2>
              <ul style={{ listStyleType: "none", padding: 0, margin: 0 }}>
                {["Finishing my B.Tech in Computer Engineering", "Preparing to begin an MSCS journey in the US", "Working on research around AI-assisted peer review and multimodal systems", "Experimenting with SLM finetuning and agentic workflows"].map((item, i) => (
                  <li key={i} style={{ padding: "1rem 1.5rem", background: "var(--secondary-bg)", borderRadius: "15px", marginBottom: "1rem", color: "var(--secondary-text)", borderLeft: "4px solid var(--highlight)" }}>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <h2 className="section-title" style={{ marginTop: "6rem", fontSize: "2.5rem" }}>Tech Stack I’m Loving</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "2rem", flexWrap: "wrap", padding: "1.5rem 2rem", background: "linear-gradient(90deg, var(--glass-bg) 0%, transparent 100%)", borderRadius: "20px", borderLeft: "4px solid var(--highlight)" }}>
              <h3 style={{ width: "200px", fontSize: "1.3rem", color: "var(--primary-text)", margin: 0 }}>
                <i className="uil uil-brain" style={{ color: "var(--highlight)", marginRight: "0.5rem" }}></i> AI / ML
              </h3>
              <div className="skill-tags" style={{ flex: 1 }}>
                {["PyTorch", "Hugging Face", "PEFT / LoRA", "LangChain", "scikit-learn", "OpenCV", "Whisper"].map(tag => (
                  <span key={tag} className="skill-tag" style={{ background: "transparent", border: "1px solid var(--highlight)", color: "var(--highlight)" }}>{tag}</span>
                ))}
              </div>
            </div>

            <div style={{ display: "flex", alignItems: "center", gap: "2rem", flexWrap: "wrap", padding: "1.5rem 2rem", background: "linear-gradient(90deg, var(--glass-bg) 0%, transparent 100%)", borderRadius: "20px", borderLeft: "4px solid var(--highlight)" }}>
              <h3 style={{ width: "200px", fontSize: "1.3rem", color: "var(--primary-text)", margin: 0 }}>
                <i className="uil uil-server" style={{ color: "var(--highlight)", marginRight: "0.5rem" }}></i> Backend
              </h3>
              <div className="skill-tags" style={{ flex: 1 }}>
                {["FastAPI", "Render", "Docker", "Firebase", "REST APIs", "HF Spaces"].map(tag => (
                  <span key={tag} className="skill-tag" style={{ background: "transparent", border: "1px solid var(--highlight)", color: "var(--highlight)" }}>{tag}</span>
                ))}
              </div>
            </div>

            <div style={{ display: "flex", alignItems: "center", gap: "2rem", flexWrap: "wrap", padding: "1.5rem 2rem", background: "linear-gradient(90deg, var(--glass-bg) 0%, transparent 100%)", borderRadius: "20px", borderLeft: "4px solid var(--highlight)" }}>
              <h3 style={{ width: "200px", fontSize: "1.3rem", color: "var(--primary-text)", margin: 0 }}>
                <i className="uil uil-flask" style={{ color: "var(--highlight)", marginRight: "0.5rem" }}></i> Tooling
              </h3>
              <div className="skill-tags" style={{ flex: 1 }}>
                {["LaTeX", "Zotero", "Weights & Biases", "Jupyter", "Git/GitHub"].map(tag => (
                  <span key={tag} className="skill-tag" style={{ background: "transparent", border: "1px solid var(--highlight)", color: "var(--highlight)" }}>{tag}</span>
                ))}
              </div>
            </div>
          </div>

          <h2 className="section-title" style={{ marginTop: "6rem", fontSize: "2.5rem" }}>Beyond Work</h2>
          <div className="timeline" style={{ marginTop: "3rem" }}>
            <div className="timeline-item">
              <div className="timeline-content">
                <h3 className="timeline-title" style={{ color: "var(--highlight)" }}>Mentoring</h3>
                <p className="timeline-description">
                  I’ve spent a lot of time mentoring students through ACM research initiatives — especially helping people publish their first papers or navigate research for the first time.
                </p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-content">
                <h3 className="timeline-title" style={{ color: "var(--highlight)" }}>Mumbai / City Life</h3>
                <p className="timeline-description">
                  Growing up in Mumbai shaped a lot of how I think — fast-paced, adaptive, slightly chaotic, but deeply energetic. I enjoy exploring the city through cafés, old neighborhoods, and conversations with people from completely different backgrounds.
                </p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-content">
                <h3 className="timeline-title" style={{ color: "var(--highlight)" }}>Research Personality</h3>
                <p className="timeline-description">
                  I enjoy projects that sit in messy gray areas where there isn’t a clear answer yet — especially problems involving evaluation, reasoning, ambiguity, and human judgment.
                </p>
              </div>
            </div>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "4rem", marginTop: "6rem", alignItems: "center" }}>
            <div style={{ padding: "3rem", background: "var(--secondary-bg)", borderRadius: "30px", position: "relative", overflow: "hidden" }}>
              <div style={{ position: "absolute", top: "-50px", right: "-50px", width: "150px", height: "150px", background: "var(--highlight)", opacity: "0.1", borderRadius: "50%", filter: "blur(40px)" }}></div>
              <h2 style={{ fontSize: "2rem", color: "var(--primary-text)", marginBottom: "2rem" }}>
                <i className="uil uil-smile" style={{ color: "var(--highlight)" }}></i> Fun Facts
              </h2>
              <ul style={{ listStyleType: "none", padding: 0, margin: 0 }}>
                {[
                  "Has worked across both research-heavy and deployment-heavy AI projects",
                  "Enjoys explaining difficult concepts through mentorship",
                  "Can spend hours optimizing prompts, evaluation pipelines, and setups",
                  "Interested in the sociology of AI adoption — not just the models",
                  "Probably treats research papers like other people treat Netflix"
                ].map((fact, i) => (
                  <li key={i} style={{ marginBottom: "1rem", color: "var(--secondary-text)", display: "flex", alignItems: "flex-start", gap: "1rem" }}>
                    <i className="uil uil-check-circle" style={{ color: "var(--highlight)", marginTop: "3px" }}></i>
                    <span>{fact}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 style={{ fontSize: "3rem", color: "var(--primary-text)", marginBottom: "1.5rem", background: "var(--gradient-secondary)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>What Drives Me</h2>
              <p style={{ fontSize: "1.2rem", color: "var(--secondary-text)", lineHeight: "1.8", marginBottom: "1.5rem" }}>
                What excites me most about AI is not just model capability, but the possibility of building systems that augment human thinking — helping people reason better, review information more carefully, and navigate complex decisions more transparently.
              </p>
              <p style={{ fontSize: "1.2rem", color: "var(--highlight)", lineHeight: "1.8", fontStyle: "italic", borderLeft: "4px solid var(--highlight)", paddingLeft: "1rem" }}>
                "I’m especially drawn toward problems where engineering, research, and human judgment intersect."
              </p>
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}
