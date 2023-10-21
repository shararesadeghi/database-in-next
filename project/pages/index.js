import { useState } from "react";

export default function Home() {
  const [name, setName] = useState("");

  const postHandler = async () =>{
    const res = await fetch("/api/data", {
      method: "POST",
      body: JSON.stringify({
        headers: {}
      })
    });

  }
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
    </div>
  );
}