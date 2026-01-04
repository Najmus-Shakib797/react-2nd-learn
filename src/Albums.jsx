import { use } from "react";
import Album from "./Album";

export default function Albums({ albumsPromise }) {
  const albums = use(albumsPromise);
  console.log(albums);
  return (
    <div className="card">
      <h3>Albums : </h3>
      {albums.map((album) => (
        <Album album={album}></Album>
      ))}
    </div>
  );
}
