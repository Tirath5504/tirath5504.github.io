import fs from "fs/promises";
import path from "path";
import Link from "next/link";
import { marked } from "marked";

function processDate(dateStr: string) {
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const d = new Date(dateStr);
  return Number.isNaN(d.getTime())
    ? dateStr
    : d.toLocaleDateString("en-US", options);
}

function capitalize(s: string) {
  return s.charAt(0).toUpperCase() + s.slice(1);
}

export async function generateStaticParams() {
  const filePath = path.join(/* turbopackIgnore: true */ process.cwd(), "public", "blogs-config.json");
  const fileContents = await fs.readFile(filePath, "utf8");
  const data = JSON.parse(fileContents);

  return data.blogs.map((blog: any) => ({
    id: blog.id,
  }));
}

export default async function BlogArticle({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const resolvedParams = await params;
  const filePath = path.join(/* turbopackIgnore: true */ process.cwd(), "public", "blogs-config.json");
  const fileContents = await fs.readFile(filePath, "utf8");
  const data = JSON.parse(fileContents);

  const blog = data.blogs.find((b: any) => b.id === resolvedParams.id);
  if (!blog) {
    return (
      <main
        className="container"
        style={{ paddingTop: "100px", textAlign: "center" }}
      >
        <h1>Blog not found</h1>
        <Link
          href="/blogs"
          className="btn btn-secondary"
          style={{ marginTop: "20px" }}
        >
          Back to All Posts
        </Link>
      </main>
    );
  }

  // Load the markdown file
  const mdFilePath = path.join(/* turbopackIgnore: true */ process.cwd(), blog.file);
  let htmlContent = "";
  try {
    const mdContents = await fs.readFile(mdFilePath, "utf8");
    htmlContent = await marked.parse(mdContents);
  } catch (e) {
    htmlContent = "<p>Error loading article content.</p>";
  }

  return (
    <main>
      <section className="section blog-details" aria-label="Full blog article">
        <div className="container">
          <Link
            href="/blogs"
            className="btn btn-secondary"
            style={{ marginBottom: "2rem" }}
          >
            <i className="uil uil-arrow-left"></i> Back to All Posts
          </Link>
          <article className="blog-detail">
            {blog.thumbnail && (
              <img
                src={`/${blog.thumbnail}`}
                alt={blog.title}
                className="blog-detail-hero-image"
              />
            )}
            <header className="blog-detail-header">
              <div className="blog-detail-meta">
                <span className={`blog-detail-badge ${blog.category}`}>
                  {capitalize(blog.category)}
                </span>
                <span>
                  <i className="uil uil-schedule"></i> {processDate(blog.date)}
                </span>
                <span>
                  <i className="uil uil-clock"></i> {blog.readTime}
                </span>
              </div>
              <h1>{blog.title}</h1>
              <p className="blog-author">By {blog.author}</p>
            </header>
            <div
              className="blog-content"
              dangerouslySetInnerHTML={{ __html: htmlContent }}
            ></div>
            <footer className="blog-detail-footer">
              <div className="blog-detail-tags">
                {blog.tags.map((tag: string) => (
                  <span key={tag} className="tag">
                    #{tag}
                  </span>
                ))}
              </div>
              <div className="blog-author-bio" style={{ marginTop: "2rem" }}>
                <img
                  src="/img/tirath_profile_img.jpeg"
                  alt={blog.author}
                  style={{
                    width: "60px",
                    height: "60px",
                    borderRadius: "50%",
                    marginRight: "15px",
                    objectFit: "cover",
                  }}
                />
                <div>
                  <strong>{blog.author}</strong>
                  <p
                    style={{
                      margin: "5px 0 0",
                      fontSize: "0.9rem",
                      color: "var(--secondary-text)",
                    }}
                  >
                    AI/MLE Intern Candidate, Incoming NYU MSCS. Exploring
                    applied GenAI, Agentic workflows, and Multimodal systems.
                  </p>
                </div>
              </div>
            </footer>
          </article>
        </div>
      </section>
    </main>
  );
}
