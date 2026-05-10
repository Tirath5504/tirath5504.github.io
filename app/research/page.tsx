export default function Research() {
  return (
    <main>
      <section className="section fade-in">
        <div className="container">
          <h1 className="section-title">Research &amp; Publications</h1>
          <p className="section-description">
            Work at the intersection of peer-review transparency, argumentation
            theory, and applied GenAI systems.
          </p>

          <div className="research-grid">
            <div className="research-paper fade-in">
              <div className="paper-accepted">Published</div>
              <h2 className="paper-title">
                Dynamic Optimization of Peer Review Length Using Information
                Density Analysis
              </h2>
              <div className="paper-venue">Scientometrics (Springer)</div>
              <p className="paper-description">
                Introduces an information-density framework that balances
                relevance, argumentative strength, and cognitive load to
                optimise peer-review length.
              </p>
            </div>

            <div className="research-paper fade-in">
              <div className="paper-status">Under Review</div>
              <h2 className="paper-title">
                AntiBug: Runtime-Aware Multimodal Agentic Program Repair for
                Production Applications
              </h2>
              <div className="paper-venue">
                Automated Software Engineering (Special Issue)
              </div>
              <p className="paper-description">
                Proposes a novel automated software patching framework using
                multimodal runtime telemetry (stack traces, screenshots) and
                specialized agent orchestration for hypothesis-driven repair.
              </p>
            </div>

            <div className="research-paper fade-in">
              <div className="paper-status">Under Review</div>
              <h2 className="paper-title">
                FRAC-MAS: Fracture Radiograph Analysis using Conformal
                Multi-Agent System
              </h2>
              <div className="paper-venue">
                Biomedical Signal Processing and Control (Special Issue)
              </div>
              <p className="paper-description">
                Introduces a conformal multi-agent fracture radiograph pipeline
                integrating robust visual models with specialized LLMs, ensuring
                statistically grounded diagnoses for clinical workflow
                integration.
              </p>
            </div>

            <div className="research-paper fade-in">
              <div className="paper-status">Under Review</div>
              <h2 className="paper-title">
                BiasChain: A Multi-Agent LLM Framework for Justified Peer Review
                Bias Detection
              </h2>
              <div className="paper-venue">
                Journal of Information Science (Sage Publications)
              </div>
              <p className="paper-description">
                Automates bias detection in peer reviews by orchestrating
                specialized agents for sentiment coherence, internal
                consistency, and inter-review alignment.
              </p>
            </div>

            <div className="research-paper fade-in">
              <div className="paper-status">Under Review</div>
              <h2 className="paper-title">
                DigniFy: Multi-Modal Multilingual Online Hate Speech Detection
              </h2>
              <div className="paper-venue">IEEE CONECCT</div>
              <p className="paper-description">
                Presents a theoretical framework and pipeline for multilingual,
                multimodal safety systems with interactive LLM orchestration to
                detect online hate speech.
              </p>
            </div>

            <div className="research-paper fade-in">
              <div className="paper-status">Whitepaper</div>
              <h2 className="paper-title">
                Evaluating Large Language Models for Automated Requirement
                Generation in IT Projects
              </h2>
              <div className="paper-venue">
                LinkedIn (Nvelop Technologies Oy)
              </div>
              <p className="paper-description">
                A comprehensive benchmark comparing DeepSeek R1, GPT-4o, Gemini
                2.0, and LLaMA 3.2 on BLEU, Levenshtein, and Jaccard metrics for
                requirement engineering.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section alt-bg fade-in">
        <div className="container">
          <h2 className="section-title">Achievements &amp; Recognition</h2>
          <div className="achievements-grid">
            <div className="project-card fade-in">
              <div className="project-icon">
                <i className="uil uil-trophy"></i>
              </div>
              <h3 className="project-title">GATE DS&amp;AI Rank 499</h3>
              <p className="project-description">
                Ranked 499 nationwide among 60,000+ candidates in GATE Data
                Science &amp; AI, demonstrating strong theoretical foundations.
              </p>
            </div>

            <div className="project-card fade-in">
              <div className="project-icon">
                <i className="uil uil-award"></i>
              </div>
              <h3 className="project-title">Amazon ML Challenge Rank 292</h3>
              <p className="project-description">
                Placed 292 out of 70,000+ participants in Amazon ML Challenge
                2024, showcasing applied machine-learning expertise.
              </p>
            </div>

            <div className="project-card fade-in">
              <div className="project-icon">
                <i className="uil uil-code-branch"></i>
              </div>
              <h3 className="project-title">CodeBounty 2024 Winner</h3>
              <p className="project-description">
                Won the flagship competitive programming contest at DJSCE,
                highlighting algorithmic design strengths.
              </p>
            </div>

            <div className="project-card fade-in">
              <div className="project-icon">
                <i className="uil uil-shield"></i>
              </div>
              <h3 className="project-title">
                Rajasthan Police Hackathon Finalist
              </h3>
              <p className="project-description">
                Led ML for the finalist solution tackling law-enforcement
                challenges with data-driven citizen feedback analysis.
              </p>
            </div>

            <div className="project-card fade-in">
              <div className="project-icon">
                <i className="uil uil-users-alt"></i>
              </div>
              <h3 className="project-title">sktime Mentoring Program</h3>
              <p className="project-description">
                Selected as a mentee under Dr. Franz Kiraly for the sktime
                mentoring program focused on time-series ML research.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
