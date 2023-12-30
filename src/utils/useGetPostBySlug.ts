"use client"

import { useState, useEffect } from 'react';
import { createBucketClient } from '@cosmicjs/sdk';

// Cosmic JS client initialization
const cosmic = createBucketClient({
  bucketSlug: 'thebithq-production',
  readKey: 'aiGglP9du1OngEXCHM3hhHviU5qcSjlSVQ48s5LrawfbOJcUuD'
});

type BlogPostDetails = {
    slug: string;
    title: string;
    metadata: any; // Replace 'any' with a more specific type based on your metadata structure
  };
  
  type UseCosmicBlogPostReturn = {
    loading: boolean;
    error: Error | null;
    data: BlogPostDetails | null;
  };
  

const useCosmicBlogPost = (slug: string): UseCosmicBlogPostReturn => {
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);
  const [data, setData] = useState<BlogPostDetails | null>(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await cosmic.objects.findOne({
          type: "blogs",
          slug: slug
        }).props("slug,title,metadata")
        .depth(1);

        // console.log(response.object)
        setData(response.object as BlogPostDetails);
      } catch (err) {
        setError(err as Error);
      } finally {
        setLoading(false);
      }
    };

    if (slug) {
      fetchPost();
    }
  }, [slug]);

  return { loading, error, data };
};

export default useCosmicBlogPost;
