import SpotlightCard from '@/components/SpotlightCard';
import Magnet from '@/components/Magnet';

export default function Projects() {
  return (
    <main>
      <section className="section fade-in">
        <div className="container">
          <h1 className="section-title">Featured Projects</h1>
          <p className="section-description">
            Selected work spanning multimodal hate-speech detection, civic-tech
            analytics, and computer-vision healthcare applied with end-to-end
            product thinking.
          </p>

          <div className="projects-grid">
            <SpotlightCard className="project-card fade-in">
              <div className="project-icon">
                <i className="uil uil-bug"></i>
              </div>
              <h2 className="project-title">AntiBug</h2>
              <p className="project-description">
                <strong>Runtime-Aware Multimodal Agentic Program Repair</strong>
                <br /> Architected a 12-agent LangGraph pipeline that ingests
                source-map-resolved stack traces and automatic DOM screenshots.
                Automates root-cause diagnosis, hypothesis validation, and
                SDK-integrated patch synthesis. Evaluated on real-world
                production bugs, fixing 46.38% of issues (3.5x better than
                GPT-4o base).
              </p>
              <div className="project-tech">
                <span className="tech-tag">LangGraph</span>
                <span className="tech-tag">LangSmith</span>
                <span className="tech-tag">Next.js</span>
                <span className="tech-tag">TypeScript</span>
              </div>
              <div className="project-links">
                <Magnet padding={50} magnetStrength={3}>
                  <a
                    href="https://antibug-survey.vercel.app/benchmark"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    Benchmark Results Website
                  </a>
                </Magnet>
                <Magnet padding={50} magnetStrength={3}>
                  <a
                    href="https://github.com/anon-research-submission/AntiBug"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    GitHub
                  </a>
                </Magnet>
              </div>
            </SpotlightCard>

            <SpotlightCard className="project-card fade-in">
              <div className="project-icon">
                <i className="uil uil-medkit"></i>
              </div>
              <h2 className="project-title">FRAC-MAS</h2>
              <p className="project-description">
                <strong>Multi-Agent Fracture Radiograph Pipeline</strong>
                <br /> Engineered a clinical decision support system integrating
                a 4-model vision ensemble (MaxViT, RAD-DINO, YOLO, DenseNet)
                with specialized LLM agents. Implemented conformal prediction to
                generate statistically grounded differential diagnoses for
                X-rays (92.0% empirical coverage, 96.4% detection rate).
              </p>
              <div className="project-tech">
                <span className="tech-tag">Grad-CAM</span>
                <span className="tech-tag">PyTorch</span>
                <span className="tech-tag">Multi-Agent</span>
                <span className="tech-tag">Computer Vision</span>
              </div>
              <div className="project-links">
                <Magnet padding={50} magnetStrength={3}>
                  <a
                    href="https://cvpr-submission-frac-mas.vercel.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    Live Demo
                  </a>
                </Magnet>
                <Magnet padding={50} magnetStrength={3}>
                  <a
                    href="https://github.com/anonymous-submission-research/CVPR-Submission-2026-FRAC-MAS"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    GitHub
                  </a>
                </Magnet>
              </div>
            </SpotlightCard>

            <SpotlightCard className="project-card fade-in">
              <div className="project-icon">
                <i className="uil uil-shield-check"></i>
              </div>
              <h2 className="project-title">DigniFy</h2>
              <p className="project-description">
                <strong>Multi-Modal Multilingual Hate Speech Detection</strong>
                <br /> Engineered a mobile application pipeline with
                DistilRoBERTa for text, OCR for image extraction, and STT-TTS
                for audio. Features an AI Agent integrating all
                modality-specific models as tools, orchestrating interaction
                across four LLMs (DeepSeek R1, GPT-4o, Gemini 2.0, LLaMA 4.0).
              </p>
              <div className="project-tech">
                <span className="tech-tag">HuggingFace</span>
                <span className="tech-tag">TensorFlow</span>
                <span className="tech-tag">FastAPI</span>
                <span className="tech-tag">Render</span>
              </div>
              <div className="project-links">
                <Magnet padding={50} magnetStrength={3}>
                  <a
                    href="https://github.com/IPD-Hate-Speech-Detection/IPD-Hate-Speech-Detection"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    GitHub
                  </a>
                </Magnet>
              </div>
            </SpotlightCard>

            <SpotlightCard className="project-card fade-in">
              <div className="project-icon">
                <i className="uil uil-search"></i>
              </div>
              <h2 className="project-title">MetaSearch</h2>
              <p className="project-description">
                <strong>Search-Augmented LLM for Consensus Resolution</strong>
                <br /> Designed a reasoning-based AI Agent combining
                disagreement detection and fact-grounded synthesis to automate
                meta-review decision-making in peer review. Utilises specialized
                heuristic constraints based on Cognitive Load theory to optimize
                consensus generation.
              </p>
              <div className="project-tech">
                <span className="tech-tag">Agentic AI</span>
                <span className="tech-tag">Python</span>
                <span className="tech-tag">RAG</span>
              </div>
              <div className="project-links">
                <Magnet padding={50} magnetStrength={3}>
                  <a
                    href="https://meta-search-demo.vercel.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    Live Demo
                  </a>
                </Magnet>
                <Magnet padding={50} magnetStrength={3}>
                  <a
                    href="https://github.com/Tirath5504/IITP_SRDA"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    GitHub
                  </a>
                </Magnet>
              </div>
            </SpotlightCard>

            <SpotlightCard className="project-card fade-in">
              <div className="project-icon">
                <i className="uil uil-balance-scale"></i>
              </div>
              <h2 className="project-title">Glass House Argumentation</h2>
              <p className="project-description">
                <strong>LLM-Argumentation System for Peer Review</strong>
                <br /> Developed a novel LLM-based argumentation system
                evaluating 900+ ICLR reviews using leading LLMs (Llama 3.1,
                Mixtral, Gemini 2.0, GPT-4o) to enhance interpretability of peer
                reviews, achieving high inter-annotator agreement (Cohen&apos;s
                Kappa = 0.834).
              </p>
              <div className="project-tech">
                <span className="tech-tag">LLMs</span>
                <span className="tech-tag">Prompt Engineering</span>
                <span className="tech-tag">Argumentation Theory</span>
              </div>
              <div className="project-links">
                <Magnet padding={50} magnetStrength={3}>
                  <a
                    href="https://github.com/Tirath5504/IIT_Patna_ScorePR"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    GitHub
                  </a>
                </Magnet>
              </div>
            </SpotlightCard>

            <SpotlightCard className="project-card fade-in">
              <div className="project-icon">
                <i className="uil uil-feedback"></i>
              </div>
              <h2 className="project-title">RakshakRita</h2>
              <p className="project-description">
                <strong>QR-led Citizen Feedback System</strong>
                <br /> Civic-tech solution for police departments with
                interactive geo-spatial dashboards, multilingual sentiment
                analysis, and automated report generation. Recognized as a Top
                100 finalist at the Rajasthan Police Hackathon 2024.
              </p>
              <div className="project-tech">
                <span className="tech-tag">BERT</span>
                <span className="tech-tag">NLTK</span>
                <span className="tech-tag">Plotly</span>
                <span className="tech-tag">GeoSpatial</span>
              </div>
              <div className="project-links">
                <Magnet padding={50} magnetStrength={3}>
                  <a
                    href="https://rakshakrita0.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    Live Demo
                  </a>
                </Magnet>
                <Magnet padding={50} magnetStrength={3}>
                  <a
                    href="https://github.com/Tirath5504/RJPOLICE_HACK_177_DjDawgs_1/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    GitHub
                  </a>
                </Magnet>
              </div>
            </SpotlightCard>
          </div>
        </div>
      </section>
    </main>
  );
}
