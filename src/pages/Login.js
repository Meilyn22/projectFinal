
import { useState } from "react";

function App() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function loginUser(event) {
    event.preventDefault();
    const response = await fetch("http://localhost:27017/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
  })
    })

    const data = await response.json();

    if (data.user) {
      localStorage.setItem("token", data.user);
      alert("Login successful");
      window.location.href = "/dashboard";
    } else { alert("Login failed, please check your username and password"); }
  }

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={loginUser}>

        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="Email"
        /><br/>

        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="Password"
        /><br/>
     
        <button type="submit">Login</button>
      </form>
    </div>
  );

}


export default App;
