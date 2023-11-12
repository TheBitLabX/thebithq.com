import { ChevronLeftIcon } from "lucide-react";
import Link from "next/link";
import { BlogDetails } from "@/interfaces";
import BlogCard from "@/components/BlogCard";
import { blogs } from "@/data";

export default function Blogs() {
  return (
    <main>
      <section className='py-12 pb-6 pt-[170px]'>
        <div className='container space-y-8'>
          <Link
            href={"/"}
            className='flex items-center text-zin-700 font-light'
          >
            <ChevronLeftIcon />
            Back One Step
          </Link>
          <h1 className='text-black text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold'>
            All Blogs are here
          </h1>
        </div>
      </section>

      <section className=''>
        <div className='container'>
          <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10'>
            {blogs.map((blog) => (
              <BlogCard key={blog.id} {...(blog as BlogDetails)} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
