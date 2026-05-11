import ContactForm from "@/components/ContactForm";
import ElectricBorder from "@/components/ElectricBorder";

export default function Contact() {
  return (
    <main>
      <section className="section fade-in">
        <div className="container">
          <h1 className="section-title">Let&apos;s Connect</h1>
          <p className="section-description">
            Always open to conversations around AI research, collaborations, or
            mentoring. Drop a message and I&apos;ll get back soon.
          </p>

          <div className="contact-container">
            <ElectricBorder borderRadius={30} color="var(--highlight)">
              <div className="contact-info fade-in" style={{ height: "100%", margin: 0 }}>
                <h2 style={{ marginBottom: "2rem", color: "var(--highlight)" }}>
                  Get In Touch
                </h2>
                <p
                  style={{
                    marginBottom: "2rem",
                    color: "var(--secondary-text)",
                    lineHeight: 1.6,
                  }}
                >
                  Whether you&apos;re a fellow researcher, industry professional,
                  or a student exploring AI, I&apos;m happy to connect, share
                  ideas, and collaborate.
                </p>

                <div className="contact-item">
                  <div className="contact-icon">
                    <i className="uil uil-envelope"></i>
                  </div>
                  <div>
                    <strong>Email</strong>
                    <br />
                    <a
                      href="mailto:tirath.bhathawala@gmail.com"
                      style={{
                        color: "var(--highlight)",
                        textDecoration: "none",
                      }}
                    >
                      tirath.bhathawala@gmail.com
                    </a>
                  </div>
                </div>

                <div className="contact-item">
                  <div className="contact-icon">
                    <i className="uil uil-phone"></i>
                  </div>
                  <div>
                    <strong>Phone</strong>
                    <br />
                    <span style={{ color: "var(--secondary-text)" }}>
                      +91 9137583387
                    </span>
                  </div>
                </div>

                <div className="contact-item">
                  <div className="contact-icon">
                    <i className="uil uil-linkedin"></i>
                  </div>
                  <div>
                    <strong>LinkedIn</strong>
                    <br />
                    <a
                      href="https://www.linkedin.com/in/tirath-bhathawala/"
                      style={{
                        color: "var(--highlight)",
                        textDecoration: "none",
                      }}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Connect with me
                    </a>
                  </div>
                </div>
              </div>
            </ElectricBorder>

            <ContactForm />
          </div>
        </div>
      </section>
    </main>
  );
}
