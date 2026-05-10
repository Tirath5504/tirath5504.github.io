import fs from "fs/promises";
import path from "path";
import BlogListClient from "@/components/BlogListClient";

export default async function BlogsPage() {
  const filePath = path.join(process.cwd(), "public", "blogs-config.json");
  const fileContents = await fs.readFile(filePath, "utf8");
  const data = JSON.parse(fileContents);
  const blogs = data.blogs;

  const featuredBlog = blogs.find((b: any) => b.featured) || blogs[0];

  return (
    <main>
      <BlogListClient blogs={blogs} featuredBlog={featuredBlog} />
    </main>
  );
}
