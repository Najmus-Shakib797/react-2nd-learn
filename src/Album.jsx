export default function Album({ album }) {
  const { userId, id, title } = album;
  return (
    <div className="card">
      <p>User id :{userId} </p>
      <p>Id : {id} </p>
      <p>Title : {title}</p>
    </div>
  );
}
