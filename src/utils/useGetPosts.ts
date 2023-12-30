import { useState, useEffect } from "react";
import { createBucketClient } from "@cosmicjs/sdk";

type BlogPost = {
  slug: string;
  title: string;
  metadata: any; // Replace 'any' with a more specific type based on your metadata structure
};

type UseCosmicBlogPostsReturn = {
  loading: boolean;
  error: Error | null;
  data: BlogPost[] | null;
};

// Cosmic JS client initialization
const cosmic = createBucketClient({
  bucketSlug: "thebithq-production",
  readKey: "aiGglP9du1OngEXCHM3hhHviU5qcSjlSVQ48s5LrawfbOJcUuD",
});

const useCosmicBlogPosts = (): UseCosmicBlogPostsReturn => {
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);
  const [data, setData] = useState<BlogPost[] | null>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await cosmic.objects
          .find({ type: "blogs" })
          .props("slug,title,metadata")
          .depth(1);

        // console.log(response.objects[0].metadata.cover_img.url)
        setData(response.objects as BlogPost[]);
      } catch (err) {
        setError(err as Error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  return { loading, error, data };
};

export default useCosmicBlogPosts;
