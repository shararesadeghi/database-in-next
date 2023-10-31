import { useEffect, useState } from "react";

export default function Home() {
  const [name, setName] = useState("");
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("/api/data")
      .then((res) => res.json())
      .then((data) => setUsers(data.data));
  }, []);

  const postHandler = async () => {
    const res = await fetch("/api/data", {
      method: "POST",
      body: JSON.stringify({ name }),
      headers: { "Content-Type": "application/json" },
    });
    const data = await res.json();
    console.log(data.data);
  };

  const detailsHandler = (id) => {
    fetch(`/api/data/${id}`)
      .then((res) => res.json())
      .then((data) => console.log(data));
  };
  return (
    <div>
      <h1>Connecting DataBase to Next.js Project!</h1>
      <div>
        <input
          placeholder="EnterName"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button onClick={postHandler}>Post</button>
      </div>
      <div>
        <ul>
          {users.map((user) => (
            <li key={user._id}>
              <div>
                <h3>{user.name}</h3>
                <button onClick={() => detailsHandler(user._id)}>
                  Log details
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
