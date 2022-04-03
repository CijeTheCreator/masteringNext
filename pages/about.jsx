import { useEffect, useState } from "react";
import Link from "next/link";
import UserDetails from "../components/userDetails";

function About() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => setUsers(json));
  });
  return (
    <div>
      <h1>A list of some of the good people I know</h1>
      {users.map((user) => (
        <Link key={user.id} href={`heros/${user.id}`}>
          <a>
            <div key={user.id}>{user.name}</div>
          </a>
        </Link>
      ))}
    </div>
  );
}

export default About;
