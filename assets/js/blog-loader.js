// Blog Markdown Loader
// Dynamically loads and renders blog posts from Markdown files

let blogsConfig = [];
let allBlogs = [];

// Initialize the blog system
async function initBlogs() {
  try {
    // Load blog configuration
    const response = await fetch("blogs-config.json");
    const config = await response.json();
    blogsConfig = config.blogs;
    allBlogs = [...blogsConfig];

    // Render featured blog in hero
    renderFeaturedHighlight();

    // Render blog cards
    renderBlogCards(allBlogs);

    // Setup filtering and search
    setupBlogFilters();
    setupBlogSearch();

    // Setup article view navigation
    setupArticleView();

    // Check if there's a hash in URL to open specific blog
    if (window.location.hash && window.location.hash.startsWith("#blog-")) {
      const blogId = window.location.hash.substring(6); // Remove #blog-
      loadFullBlog(blogId);
    }
  } catch (error) {
    console.error("Error initializing blogs:", error);
    document.getElementById("blog-grid").innerHTML = `
      <p style="text-align: center; color: var(--error-color, #e74c3c);">
        Unable to load blog posts. Please try again later.
      </p>
    `;
  }
}

// Render featured blog highlight in hero card
function renderFeaturedHighlight() {
  const featured = blogsConfig.find((blog) => blog.featured);
  if (!featured) return;

  const highlightContainer = document.getElementById("featured-highlight");
  highlightContainer.innerHTML = `
    <h2>Latest Highlight</h2>
    <p>
      <strong>${featured.title}</strong><br />
      ${featured.excerpt}
    </p>
    <a href="#blog-${featured.id}" class="blog-hero-link" onclick="event.preventDefault(); loadFullBlog('${featured.id}')">
      Read Highlight
    </a>
  `;
}

// Render blog preview cards
function renderBlogCards(blogs) {
  const grid = document.getElementById("blog-grid");

  if (blogs.length === 0) {
    grid.innerHTML =
      '<p style="text-align: center;">No posts found matching your criteria.</p>';
    return;
  }

  grid.innerHTML = blogs
    .map(
      (blog) => `
    <article 
      class="blog-card" 
      data-category="${blog.category}"
      data-tags="${blog.tags.join(" ").toLowerCase()}"
    >
      <div class="blog-card-header">
        <span class="blog-card-badge ${blog.category}">${capitalize(
        blog.category
      )}</span>
        <span class="blog-card-date">${formatDate(blog.date)}</span>
      </div>
      <h3>${blog.title}</h3>
      <p>${blog.excerpt}</p>
      <div class="blog-card-tags">
        ${blog.tags.map((tag) => `<span>#${tag}</span>`).join("")}
      </div>
      <a href="#blog-${
        blog.id
      }" class="blog-card-link" onclick="event.preventDefault(); loadFullBlog('${
        blog.id
      }')">
        Read more
      </a>
    </article>
  `
    )
    .join("");
}

// Load and render full blog post from Markdown
async function loadFullBlog(blogId) {
  const blog = blogsConfig.find((b) => b.id === blogId);
  if (!blog) {
    console.error("Blog not found:", blogId);
    return;
  }

  try {
    // Fetch the Markdown file
    const response = await fetch(blog.file);
    const markdown = await response.text();

    // Convert Markdown to HTML using marked.js
    const htmlContent = marked.parse(markdown);

    // Render the full blog article
    const articleContent = document.getElementById("blog-article-content");
    articleContent.innerHTML = `
      <header class="blog-detail-header">
        <div class="blog-detail-meta">
          <span class="blog-detail-badge ${blog.category}">${capitalize(
      blog.category
    )}</span>
          <span><i class="uil uil-schedule"></i> ${formatDate(blog.date)}</span>
          <span><i class="uil uil-clock"></i> ${blog.readTime}</span>
        </div>
        <h1>${blog.title}</h1>
        <p class="blog-author">By ${blog.author}</p>
      </header>
      <div class="blog-content">
        ${htmlContent}
      </div>
      <footer class="blog-detail-footer">
        <div class="blog-detail-tags">
          ${blog.tags.map((tag) => `<span class="tag">#${tag}</span>`).join("")}
        </div>
      </footer>
    `;

    // Show article view, hide grid
    document.getElementById("blog-grid").parentElement.style.display = "none";
    document.getElementById("blog-article-view").style.display = "block";

    // Update URL hash
    window.location.hash = `blog-${blogId}`;

    // Scroll to top
    window.scrollTo({ top: 0, behavior: "smooth" });
  } catch (error) {
    console.error("Error loading blog:", error);
    alert("Unable to load blog post. Please try again.");
  }
}

// Setup blog category filtering
function setupBlogFilters() {
  const filterButtons = document.querySelectorAll(".filter-button");

  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      // Update active state
      filterButtons.forEach((btn) => btn.classList.remove("active"));
      button.classList.add("active");

      // Filter blogs
      const category = button.dataset.category;
      const filtered =
        category === "all"
          ? allBlogs
          : allBlogs.filter((blog) => blog.category === category);

      renderBlogCards(filtered);
    });
  });
}

// Setup blog search
function setupBlogSearch() {
  const searchInput = document.getElementById("blog-search");

  searchInput.addEventListener("input", (e) => {
    const query = e.target.value.toLowerCase();

    if (!query) {
      // Reset to current filter
      const activeFilter = document.querySelector(".filter-button.active");
      const category = activeFilter.dataset.category;
      const filtered =
        category === "all"
          ? allBlogs
          : allBlogs.filter((blog) => blog.category === category);
      renderBlogCards(filtered);
      return;
    }

    const filtered = allBlogs.filter((blog) => {
      return (
        blog.title.toLowerCase().includes(query) ||
        blog.excerpt.toLowerCase().includes(query) ||
        blog.tags.some((tag) => tag.toLowerCase().includes(query))
      );
    });

    renderBlogCards(filtered);
  });
}

// Setup article view navigation (back button)
function setupArticleView() {
  const backButton = document.getElementById("back-to-grid");

  backButton.addEventListener("click", () => {
    // Hide article view, show grid
    document.getElementById("blog-article-view").style.display = "none";
    document.getElementById("blog-grid").parentElement.style.display = "block";

    // Clear URL hash
    window.location.hash = "";

    // Scroll to blog grid
    document.getElementById("blog-grid").scrollIntoView({ behavior: "smooth" });
  });
}

// Utility: Format date to readable format
function formatDate(dateString) {
  const date = new Date(dateString);
  const options = { year: "numeric", month: "long", day: "numeric" };
  return date.toLocaleDateString("en-US", options);
}

// Utility: Capitalize first letter
function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

// Initialize when DOM is loaded
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initBlogs);
} else {
  initBlogs();
}
