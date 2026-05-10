export default function Footer() {
  return (
    <footer>
      <div className="footer-content">
        <p className="footer-text">
          © {new Date().getFullYear()} Tirath Bhathawala. Crafted with passion
          for AI research and innovation.
        </p>
        <div className="footer-social">
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
          <a
            href="https://mlbeginnershandbook.blogspot.com/"
            className="social-link"
            aria-label="Blog"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="uil uil-blogger"></i>
          </a>
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
    </footer>
  );
}
