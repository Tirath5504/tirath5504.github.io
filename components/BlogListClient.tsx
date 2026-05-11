"use client";

import { useState } from "react";
import Link from "next/link";
import ElectricBorder from "@/components/ElectricBorder";


interface Blog {
  id: string;
  title: string;
  date: string;
  category: string;
  excerpt: string;
  readTime: string;
  tags: string[];
  thumbnail: string;
  featured?: boolean;
}

interface Props {
  blogs: Blog[];
  featuredBlog?: Blog;
}

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

export default function BlogListClient({ blogs, featuredBlog }: Props) {
  const [filter, setFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredBlogs = blogs.filter((blog) => {
    const matchesFilter = filter === "all" || blog.category === filter;
    const query = searchQuery.toLowerCase();
    const content =
      `${blog.title} ${blog.excerpt} ${blog.tags.join(" ")}`.toLowerCase();
    const matchesSearch = query === "" || content.includes(query);
    return matchesFilter && matchesSearch;
  });

  return (
    <>
      <section className="section blog-hero" id="top-of-blog">
        <div className="container blog-hero-content">
          <div className="blog-hero-text">
            <span className="blog-hero-kicker">Insights &amp; Stories</span>
            <h1>Ideas at the Intersection of AI, Research, and Life</h1>
            <p>
              A curated collection of deep dives, personal reflections, and
              practical guides covering AI research, product thinking, and the
              occasional offbeat story. Explore what I am experimenting with and
              learning along the way.
            </p>
            <div className="blog-hero-actions">
              <a href="#blog-grid" className="btn btn-primary">
                Dive Into the Posts
              </a>
              <Link href="/contact" className="btn btn-secondary">
                Pitch a Collaboration
              </Link>
            </div>
          </div>
          <ElectricBorder borderRadius={30} color="var(--highlight)" style={{ marginBottom: "4rem" }}>
          <div className="blog-hero-card" id="featured-highlight">
            {featuredBlog && (
              <>
                {featuredBlog.thumbnail && (
                  <img
                    src={`/${featuredBlog.thumbnail}`}
                    alt={featuredBlog.title}
                    className="blog-hero-card-image"
                  />
                )}
                <div className="blog-hero-card-content">
                  <h2>Latest Highlight</h2>
                  <h3>{featuredBlog.title}</h3>
                  <div className="blog-hero-meta">
                    <span
                      className={`blog-card-badge ${featuredBlog.category}`}
                    >
                      {capitalize(featuredBlog.category)}
                    </span>
                    <span>
                      <i className="uil uil-clock"></i> {featuredBlog.readTime}
                    </span>
                    <span>
                      <i className="uil uil-schedule"></i>{" "}
                      {processDate(featuredBlog.date)}
                    </span>
                  </div>
                  <p>{featuredBlog.excerpt}</p>
                  <Link
                    href={`/blogs/${featuredBlog.id}`}
                    className="blog-hero-link"
                  >
                    Read Full Article
                  </Link>
                </div>
              </>
            )}
          </div>
          </ElectricBorder>
        </div>
      </section>

      <section className="section blog-controls" aria-label="Blog filters">
        <div className="container">
          <div className="blog-search">
            <label htmlFor="blog-search" className="visually-hidden">
              Search posts
            </label>
            <i className="uil uil-search"></i>
            <input
              type="search"
              id="blog-search"
              placeholder="Search by title, summary, or tag"
              autoComplete="off"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <div className="blog-filter-bar">
            <span className="filter-label">Browse by category:</span>
            <div className="filter-buttons" role="list" aria-label="Categories">
              {["all", "technical", "general", "community"].map((cat) => (
                <button
                  key={cat}
                  className={`filter-button ${filter === cat ? "active" : ""}`}
                  role="listitem"
                  onClick={() => setFilter(cat)}
                >
                  {capitalize(cat)}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section blog-list" aria-label="Blog posts">
        <div className="container blog-grid" id="blog-grid">
          {filteredBlogs.length === 0 ? (
            <p style={{ textAlign: "center" }}>
              No posts found matching your criteria.
            </p>
          ) : (
            filteredBlogs.map((blog) => (
              <article
                key={blog.id}
                className="blog-card"
                data-category={blog.category}
                data-tags={blog.tags.join(" ").toLowerCase()}
              >
                {blog.thumbnail && (
                  <img
                    src={`/${blog.thumbnail}`}
                    alt={blog.title}
                    className="blog-card-thumbnail"
                  />
                )}
                <div className="blog-card-body">
                  <div className="blog-card-header">
                    <span className={`blog-card-badge ${blog.category}`}>
                      {capitalize(blog.category)}
                    </span>
                    <span className="blog-card-date">
                      {processDate(blog.date)}
                    </span>
                  </div>
                  <h3>{blog.title}</h3>
                  <p>{blog.excerpt}</p>
                  <div className="blog-card-tags">
                    {blog.tags.map((tag) => (
                      <span key={tag}>#{tag}</span>
                    ))}
                  </div>
                  <Link href={`/blogs/${blog.id}`} className="blog-card-link">
                    Read more
                  </Link>
                </div>
              </article>
            ))
          )}
        </div>
      </section>

      <section
        className="section blog-newsletter fade-in"
        aria-label="Newsletter"
      >
        <div className="container newsletter-card">
          <div className="newsletter-content">
            <h2>Subscribe for Fresh Takes</h2>
            <p>
              Get a monthly digest of research notes, upcoming talks, and
              behind-the-scenes experiments. No spam; just thoughtful updates.
            </p>
          </div>
          <form
            className="newsletter-form"
            id="newsletter-form"
            onSubmit={(e) => {
              e.preventDefault();
              const formData = new FormData(e.currentTarget);
              const email = formData.get("email");
              if (!email) {
                alert("Please add your email before subscribing.");
                return;
              }
              alert("Thanks for subscribing! You'll hear from me soon.");
              e.currentTarget.reset();
            }}
          >
            <label htmlFor="newsletter-email" className="visually-hidden">
              Email address
            </label>
            <input
              type="email"
              id="newsletter-email"
              name="email"
              placeholder="you@example.com"
              required
            />
            <button type="submit" className="btn btn-primary">
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
