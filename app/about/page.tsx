import LogoLoop from "@/components/LogoLoop";

const techStackLogos = [
  { node: <span style={{ padding: "0.5rem 1rem", fontSize: "1.5rem", fontWeight: 600, color: "var(--highlight)", background: "var(--glass-bg)", borderRadius: "12px", border: "1px solid var(--highlight)" }}>PyTorch</span> },
  { node: <span style={{ padding: "0.5rem 1rem", fontSize: "1.5rem", fontWeight: 600, color: "var(--highlight)", background: "var(--glass-bg)", borderRadius: "12px", border: "1px solid var(--highlight)" }}>Hugging Face</span> },
  { node: <span style={{ padding: "0.5rem 1rem", fontSize: "1.5rem", fontWeight: 600, color: "var(--highlight)", background: "var(--glass-bg)", borderRadius: "12px", border: "1px solid var(--highlight)" }}>PEFT / LoRA</span> },
  { node: <span style={{ padding: "0.5rem 1rem", fontSize: "1.5rem", fontWeight: 600, color: "var(--highlight)", background: "var(--glass-bg)", borderRadius: "12px", border: "1px solid var(--highlight)" }}>LangChain</span> },
  { node: <span style={{ padding: "0.5rem 1rem", fontSize: "1.5rem", fontWeight: 600, color: "var(--highlight)", background: "var(--glass-bg)", borderRadius: "12px", border: "1px solid var(--highlight)" }}>scikit-learn</span> },
  { node: <span style={{ padding: "0.5rem 1rem", fontSize: "1.5rem", fontWeight: 600, color: "var(--highlight)", background: "var(--glass-bg)", borderRadius: "12px", border: "1px solid var(--highlight)" }}>OpenCV</span> },
  { node: <span style={{ padding: "0.5rem 1rem", fontSize: "1.5rem", fontWeight: 600, color: "var(--highlight)", background: "var(--glass-bg)", borderRadius: "12px", border: "1px solid var(--highlight)" }}>FastAPI</span> },
  { node: <span style={{ padding: "0.5rem 1rem", fontSize: "1.5rem", fontWeight: 600, color: "var(--highlight)", background: "var(--glass-bg)", borderRadius: "12px", border: "1px solid var(--highlight)" }}>Docker</span> },
  { node: <span style={{ padding: "0.5rem 1rem", fontSize: "1.5rem", fontWeight: 600, color: "var(--highlight)", background: "var(--glass-bg)", borderRadius: "12px", border: "1px solid var(--highlight)" }}>Firebase</span> },
  { node: <span style={{ padding: "0.5rem 1rem", fontSize: "1.5rem", fontWeight: 600, color: "var(--highlight)", background: "var(--glass-bg)", borderRadius: "12px", border: "1px solid var(--highlight)" }}>Weights & Biases</span> },
  { node: <span style={{ padding: "0.5rem 1rem", fontSize: "1.5rem", fontWeight: 600, color: "var(--highlight)", background: "var(--glass-bg)", borderRadius: "12px", border: "1px solid var(--highlight)" }}>Git/GitHub</span> }
];

import ElectricBorder from "@/components/ElectricBorder";

export default function About() {
  return (
    <main>
      <section className="section fade-in">
        <div className="container">
          <h1 className="section-title">About Me</h1>
          
          <ElectricBorder borderRadius={30} color="var(--highlight)" style={{ marginBottom: "4rem" }}>
            <div style={{ position: "relative", padding: "3rem", background: "var(--glass-bg)", borderRadius: "30px", border: "1px solid var(--highlight)", boxShadow: "0 10px 30px rgba(0, 212, 255, 0.1)" }}>
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
          </ElectricBorder>

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



          {/* <h2 className="section-title" style={{ marginTop: "6rem", fontSize: "2.5rem" }}>Beyond Work</h2>
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
          </div> */}

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "4rem", marginTop: "6rem", alignItems: "center" }}>
            <ElectricBorder borderRadius={30} color="var(--highlight)" style={{ marginBottom: "4rem" }}>
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
            </ElectricBorder>

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

          <div style={{ marginTop: "8rem", marginBottom: "2rem", width: "100%", overflow: "hidden" }}>
            <h2 className="section-title" style={{ fontSize: "2.5rem", textAlign: "center", marginBottom: "3rem" }}>Tech Stack I’m Loving</h2>
            <LogoLoop logos={techStackLogos} speed={50} direction="left" />
            <div style={{ marginTop: "2rem" }}>
              <LogoLoop logos={techStackLogos.slice().reverse()} speed={50} direction="right" />
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}
