import VoteButton from "@/components/vote-btn";

export default async function PostPage({ params }: { params: { id: string } })
{
    const response = await fetch(`https://dummyjson.com/posts/${params.id}`);
    const post = await response.json();

    return (
        <main className="text-center pt-16 px-5">
        <h1 className="text-4xl md:text-5xl font-semibold text-center mx-auto mb-5">{post.title}</h1>
        <p className="text-sm md:text-xl text-center mx-auto mb-5 max-w-[700px]">{post.body}</p>

        <VoteButton></VoteButton>
        </main>
    )
}