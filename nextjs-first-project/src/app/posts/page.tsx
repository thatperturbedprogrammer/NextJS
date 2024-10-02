import PostList from "@/components/post-list";
import { Suspense } from "react";

export default async function Posts() {
    return (
    <main className="text-center pt-16 px-5">
      <h1 className="text-4xl md:text-5xl font-bold text-center mx-auto mb-5">All Posts</h1>
      
      {/* Suspense */}
      <Suspense fallback="Loading...">
      <PostList></PostList>
      </Suspense>
    </main>   
    );
}