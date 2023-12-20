"use client";
import { useUser } from "./use-user";

function UserDebug(): JSX.Element {
  const { user } = useUser();
  if (!user)
    return (
      <div>
        <h1>user</h1>
        <p>Cargando</p>
      </div>
    );
  return (
    <div>
      <h1>user</h1>
      <p>id: {user.id}</p>
      <p>username: {user.username}</p>
      <p>visitsCount: {user.visitsCount}</p>
    </div>
  );
}

export default UserDebug;
