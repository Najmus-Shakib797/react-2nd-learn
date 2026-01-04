export default function Post({ post }) {
  return (
    <div className="card">
      <p>{post.body}</p>
    </div>
  );
}
