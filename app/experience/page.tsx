export default function Experience() {
  return (
    <main>
      <section className="section fade-in">
        <div className="container">
          <h1 className="section-title">Experience</h1>
          <p className="section-description">
            A timeline of research collaborations and industry roles focused on
            applied AI, LLM systems, and enterprise-grade automation.
          </p>

          <div className="timeline">
            <div className="timeline-item fade-in">
              <div className="timeline-content">
                <div className="timeline-date">March 2025 – August 2025</div>
                <h2 className="timeline-title">AI Intern</h2>
                <div className="timeline-company">
                  BrandContext.ai • Hybrid, Mumbai, India
                </div>
                <p className="timeline-description">
                  • Developed an AI-agentic system powered by dynamic graphs and
                  real-time factory operation databases to support supervisor
                  workflows, detect anomalies, and dynamically incorporate
                  worker-input special conditions.
                  <br />
                  • Evaluated and productionized computer-vision pipelines for
                  retail supermarkets, fine-tuning YOLOv11 multi-class detectors
                  for Xiaomi (0.87 mAP@50 across over 500 stores in India).
                  <br />• Built legally-compliant speaker-diarization pipelines
                  for sales–customer calls using open-source (SpeechBrain) and
                  commercial (ElevenLabs) stacks to enable accurate speaker
                  labeling and downstream analytics.
                </p>
              </div>
            </div>

            <div className="timeline-item fade-in">
              <div className="timeline-content">
                <div className="timeline-date">October 2024 – May 2025</div>
                <h2 className="timeline-title">Research Intern</h2>
                <div className="timeline-company">
                  Indian Institute of Technology, Patna • Remote
                </div>
                <p className="timeline-description">
                  • Designed MetaSearch, a search-augmented, reasoning-based AI
                  Agent for consensus resolution in peer review, combining
                  disagreement detection and fact-grounded synthesis to automate
                  meta-review decision-making.
                  <br />• Developed a novel LLM-argumentation system for peer
                  review, evaluating 900+ ICLR reviews using leading LLMs (Llama
                  3.1, Mixtral, Gemini 2.0, GPT-4o), achieving high
                  inter-annotator agreement (Cohen&apos;s Kappa = 0.834).
                </p>
              </div>
            </div>

            <div className="timeline-item fade-in">
              <div className="timeline-content">
                <div className="timeline-date">August 2024 – February 2025</div>
                <h2 className="timeline-title">AI Intern</h2>
                <div className="timeline-company">
                  Nvelop Technologies Oy • Remote, Helsinki, Finland
                </div>
                <p className="timeline-description">
                  • Devised Retrieval-Augmented Generation (RAG) workflows in
                  Azure AI PromptFlow across 50+ RFPs.
                  <br />• Optimized chunking strategies and top-p sampling
                  parameters, reducing document retrieval perplexity by 15%.
                </p>
              </div>
            </div>

            <div className="timeline-item fade-in">
              <div className="timeline-content">
                <div className="timeline-date">June 2024 – July 2024</div>
                <h2 className="timeline-title">Research Assistant</h2>
                <div className="timeline-company">
                  UIUC+ Summer Research Program • USA (Remote)
                </div>
                <p className="timeline-description">
                  Investigated C-to-Rust transpilation with existing tools and
                  LLMs, categorising translation bugs and strengthening quality
                  evaluation frameworks for future research.
                </p>
              </div>
            </div>

            <div className="timeline-item fade-in">
              <div className="timeline-content">
                <div className="timeline-date">June 2024 – July 2024</div>
                <h2 className="timeline-title">
                  Python (LLM) Development Intern
                </h2>
                <div className="timeline-company">
                  PavePilot AI • USA (Remote)
                </div>
                <p className="timeline-description">
                  Built AI-powered marketing content pipelines, evaluated
                  multiple image-generation models, and tailored GenAI prompts
                  to create platform-specific, brand-aligned campaigns.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
