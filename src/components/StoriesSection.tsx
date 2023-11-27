"use client";
import { blogs } from "@/data";
import BlogCard from "./BlogCard";
import HorizontalBlogCard from "./HorizontalBlogCard";
import { BlogDetails } from "@/interfaces";
import useCosmicBlogPosts from "@/utils/useGetPosts";

export default function StoriesSection() {
  const { loading, error, data: posts } = useCosmicBlogPosts();

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className='grid lg:grid-cols-2 xl:grid-cols-5 gap-6 mt-10 h-500'>
      <div className='xl:col-span-2'>
        <BlogCard {...posts![0]} />
      </div>
      <div className='xl:col-span-3 space-y-6'>
        {blogs
          .filter((blog) => !blog.isFeatured)
          .map((blog) => (
            <HorizontalBlogCard key={blog.id} {...(blog as BlogDetails)} />
          ))}
      </div>
    </div>
  );
}
