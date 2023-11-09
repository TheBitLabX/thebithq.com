import { blogs } from "@/data";
import BlogCard from "./BlogCard";
import HorizontalBlogCard from "./HorizontalBlogCard";
import { BlogDetails } from "@/interfaces";

export default function StoriesSection() {

  const featuredBlog = blogs.find((blog) => blog.isFeatured);

  return (
    <div className="grid lg:grid-cols-2 xl:grid-cols-5 gap-6 mt-10 h-500">
      <div className="xl:col-span-2">
        <BlogCard {...(featuredBlog as BlogDetails)} />
      </div>
      <div className="xl:col-span-3 space-y-6">
        {blogs
          .filter((blog) => !blog.isFeatured)
          .map((blog) => (
            <HorizontalBlogCard key={blog.id} {...(blog as BlogDetails)} />
          ))}
      </div>
    </div>
  );
}
