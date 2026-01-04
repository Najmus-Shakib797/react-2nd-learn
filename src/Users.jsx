import { use } from "react";

export default function Users({ fetchUser }) {
  const users = use(fetchUser);
  //   console.log(users);
  return (
    <div className="card">
      <h3>Users : </h3>
    </div>
  );
}
