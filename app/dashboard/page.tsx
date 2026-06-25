"use client";
import useSWR from "swr";
export default function Page() {
  const fetcher = (url: string) => fetch(url).then((res) => res.json());
  const { data, error, isLoading } = useSWR(
    "https://jsonplaceholder.typicode.com/posts",
    fetcher,
    {
      refreshInterval: 10000,
    },
  );
  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Failed</div>;
  }
  return (
    <div>
      {data.map((post: any) => (
        <div key={post.id}>{post.title}</div>
      ))}
    </div>
  );
}
