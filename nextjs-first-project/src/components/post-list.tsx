import Link from "next/link";
import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal, AwaitedReactNode } from "react";

export default async function PostList()
{
    const response = await fetch("https://dummyjson.com/posts?limit=10");
    const data = await response.json();
    return  (
        <div>
        <ul>
        {
            data.posts.map((post: { id: string | null | undefined; title: string | number | bigint | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<AwaitedReactNode> | null | undefined; }) => (
                <li key={post.id} className="my-2 text-sm"><Link href={`/posts/${post.id}`}>{post.title}</Link>
                </li>
                
            ))
        }
        </ul>
        </div>
    )
}